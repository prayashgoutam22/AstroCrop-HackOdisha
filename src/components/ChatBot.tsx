import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ConversationContext {
  lastTopic: string;
  currentTopic: string;
  userPreferences: string[];
  previousQuestions: string[];
  previousResponses: string[];
  followUpQuestions: string[];
  relatedTopics: string[];
}

const ChatBot: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const getInitialMessage = () => {
    if (language === 'hi') {
      return 'नमस्ते! मैं फसलGPT हूं। मैं फसल अनुकूलन, मौसम पूर्वानुमान, उर्वरक सिफारिशें, सिंचाई अनुसूची और उत्पादन पूर्वानुमान के बारे में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?';
    }
    return 'Hello! I\'m FasalGPT. I can help you with questions about crop optimization, weather forecasts, fertilizer recommendations, irrigation schedules, and yield predictions. How can I assist you today?';
  };
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getInitialMessage(),
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    lastTopic: '',
    currentTopic: '',
    userPreferences: [],
    previousQuestions: [],
    previousResponses: [],
    followUpQuestions: [
      "Tell me more about crop optimization",
      "How can I improve soil health?",
      "What are the best irrigation practices?"
    ],
    relatedTopics: []
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = useMemo(() => {
    if (language === 'hi') {
      return [
        "चावल की खेती गाइड",
        "गेहूं उर्वरक अनुसूची",
        "मिट्टी pH प्रबंधन",
        "फसलों के लिए कीट नियंत्रण",
        "सिंचाई समय",
        "उत्पादन पूर्वानुमान विधियां"
      ];
    }
    return [
      "Rice cultivation guide",
      "Wheat fertilizer schedule",
      "Soil pH management",
      "Pest control for crops",
      "Irrigation timing",
      "Yield prediction methods"
    ];
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Helper function to detect the topic of a message - optimized with useCallback
  const detectTopic = useCallback((message: string): string => {
    const lowerMessage = message.toLowerCase().trim();
    
    if (lowerMessage.includes('rice') || lowerMessage.includes('wheat') || lowerMessage.includes('maize') || 
        lowerMessage.includes('cotton') || lowerMessage.includes('sugarcane')) {
      return 'crops';
    }
    if (lowerMessage.includes('pest') || lowerMessage.includes('disease') || lowerMessage.includes('insect') || 
        lowerMessage.includes('fungus') || lowerMessage.includes('bacteria')) {
      return 'pests';
    }
    if (lowerMessage.includes('fertilizer') || lowerMessage.includes('nutrient') || lowerMessage.includes('npk') || 
        lowerMessage.includes('urea') || lowerMessage.includes('compost')) {
      return 'fertilizer';
    }
    if (lowerMessage.includes('irrigation') || lowerMessage.includes('water') || lowerMessage.includes('watering') || 
        lowerMessage.includes('drip') || lowerMessage.includes('sprinkler')) {
      return 'irrigation';
    }
    if (lowerMessage.includes('weather') || lowerMessage.includes('rain') || lowerMessage.includes('temperature') || 
        lowerMessage.includes('forecast') || lowerMessage.includes('climate')) {
      return 'weather';
    }
    if (lowerMessage.includes('yield') || lowerMessage.includes('prediction') || lowerMessage.includes('harvest') || 
        lowerMessage.includes('output')) {
      return 'yield';
    }
    if (lowerMessage.includes('soil') || lowerMessage.includes('ph') || lowerMessage.includes('organic matter')) {
      return 'soil';
    }
    if (lowerMessage.includes('market') || lowerMessage.includes('price') || lowerMessage.includes('cost') || 
        lowerMessage.includes('profit')) {
      return 'market';
    }
    if (lowerMessage.includes('organic') || lowerMessage.includes('natural') || lowerMessage.includes('sustainable')) {
      return 'organic';
    }
    
    return 'general';
  }, []);
  
  // Helper function to generate follow-up questions based on topic - optimized with useCallback
  const generateFollowUpQuestions = useCallback((topic: string, currentResponse: string): string[] => {
    const followUps: string[] = [];
    
    switch(topic) {
      case 'crops':
        followUps.push(
          "What's the best planting time for this crop?",
          "How much fertilizer should I use for this crop?",
          "What are common diseases affecting this crop?"
        );
        break;
      case 'pests':
        followUps.push(
          "Are there organic solutions for this pest problem?",
          "How can I prevent this pest in the future?",
          "What crops are resistant to this pest?"
        );
        break;
      case 'fertilizer':
        followUps.push(
          "When is the best time to apply this fertilizer?",
          "Are there organic alternatives to chemical fertilizers?",
          "How can I test my soil before applying fertilizer?"
        );
        break;
      case 'irrigation':
        followUps.push(
          "What's the most water-efficient irrigation method?",
          "How can I tell if my crops are getting enough water?",
          "What are signs of overwatering?"
        );
        break;
      case 'weather':
        followUps.push(
          "How will this weather affect my crops?",
          "What precautions should I take for the upcoming weather?",
          "Which crops are best suited for this climate?"
        );
        break;
      case 'yield':
        followUps.push(
          "How can I improve my crop yield?",
          "What factors most affect yield prediction?",
          "How accurate are yield predictions?"
        );
        break;
      case 'soil':
        followUps.push(
          "How can I improve my soil quality?",
          "What crops grow best in this soil type?",
          "How often should I test my soil?"
        );
        break;
      case 'market':
        followUps.push(
          "When is the best time to sell my crops?",
          "How can I get better prices for my produce?",
          "What value-added products can I create?"
        );
        break;
      case 'organic':
        followUps.push(
          "How do I transition to organic farming?",
          "What are the benefits of organic certification?",
          "Which organic practices give the best results?"
        );
        break;
      default:
        followUps.push(
          "Tell me more about crop optimization",
          "How can I improve soil health?",
          "What are the best irrigation practices?"
        );
    }
    
    return followUps;
  }, []);
  
  // Helper function to generate related topics - optimized with useCallback
  const generateRelatedTopics = useCallback((topic: string): string[] => {
    const relatedTopics: string[] = [];
    
    switch(topic) {
      case 'crops':
        relatedTopics.push('fertilizer', 'irrigation', 'pests', 'soil');
        break;
      case 'pests':
        relatedTopics.push('crops', 'organic', 'weather');
        break;
      case 'fertilizer':
        relatedTopics.push('soil', 'crops', 'organic');
        break;
      case 'irrigation':
        relatedTopics.push('weather', 'crops', 'soil');
        break;
      case 'weather':
        relatedTopics.push('irrigation', 'crops', 'yield');
        break;
      case 'yield':
        relatedTopics.push('crops', 'fertilizer', 'market');
        break;
      case 'soil':
        relatedTopics.push('fertilizer', 'crops', 'organic');
        break;
      case 'market':
        relatedTopics.push('yield', 'crops', 'organic');
        break;
      case 'organic':
        relatedTopics.push('soil', 'pests', 'fertilizer');
        break;
      default:
        relatedTopics.push('crops', 'soil', 'weather', 'yield');
    }
    
    return relatedTopics;
  }, []);
  
  // Main function to get bot response - optimized with useCallback
  const getBotResponse = useCallback((userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    const detectedTopic = detectTopic(message);
    
    // Update conversation context
    setConversationContext(prev => {
      // Determine if this is a follow-up to the previous topic
      const isFollowUp = prev.currentTopic && 
                         (message.includes(prev.currentTopic) || 
                          prev.relatedTopics.some(topic => message.includes(topic)));
      
      const newTopic = isFollowUp ? prev.currentTopic : detectedTopic;
      
      return {
        ...prev,
        lastTopic: prev.currentTopic,
        currentTopic: newTopic,
        previousQuestions: [...prev.previousQuestions.slice(-4), userMessage], // Keep last 5 questions
      };
    });
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return 'Hello! I\'m your agricultural assistant. I\'m here to help you with farming questions, crop optimization, weather information, and agricultural best practices. What would you like to know?';
    }
    
    // Specific crop-related questions
    if (message.includes('rice') || message.includes('wheat') || message.includes('maize') || message.includes('cotton') || message.includes('sugarcane')) {
      const crop = message.includes('rice') ? 'rice' : message.includes('wheat') ? 'wheat' : message.includes('maize') ? 'maize' : message.includes('cotton') ? 'cotton' : 'sugarcane';
      return `Great question about ${crop}! Here's specific guidance:\n\n**${crop.toUpperCase()} CULTIVATION:**\n• Best planting time: ${crop === 'rice' ? 'June-July (Kharif)' : crop === 'wheat' ? 'October-November (Rabi)' : crop === 'maize' ? 'June-July or January-February' : crop === 'cotton' ? 'April-May' : 'February-March'}\n• Soil type: ${crop === 'rice' ? 'Clay loam, well-drained' : crop === 'wheat' ? 'Loamy soil, good drainage' : crop === 'maize' ? 'Well-drained loam' : crop === 'cotton' ? 'Black cotton soil' : 'Well-drained fertile soil'}\n• Water requirement: ${crop === 'rice' ? 'High (flood irrigation)' : crop === 'wheat' ? 'Moderate' : crop === 'maize' ? 'Moderate to high' : crop === 'cotton' ? 'Moderate' : 'High'}\n• Expected yield: ${crop === 'rice' ? '4-6 tons/hectare' : crop === 'wheat' ? '3-5 tons/hectare' : crop === 'maize' ? '6-8 tons/hectare' : crop === 'cotton' ? '2-3 bales/hectare' : '80-100 tons/hectare'}\n\nWhat specific aspect of ${crop} farming would you like to know more about?`;
    }
    
    // Specific pest/disease questions
    if (message.includes('pest') || message.includes('disease') || message.includes('insect') || message.includes('fungus') || message.includes('bacteria')) {
      if (message.includes('rice') && (message.includes('pest') || message.includes('disease'))) {
        return '**RICE PEST & DISEASE MANAGEMENT:**\n\n**Common Pests:**\n• Brown Plant Hopper: Use neem oil, avoid excessive nitrogen\n• Stem Borer: Remove affected plants, use pheromone traps\n• Leaf Folder: Spray with neem-based pesticides\n\n**Common Diseases:**\n• Blast: Use resistant varieties, avoid water stress\n• Bacterial Leaf Blight: Use copper-based fungicides\n• Sheath Blight: Improve drainage, use fungicides\n\n**Prevention:**\n• Use certified seeds\n• Maintain proper spacing\n• Avoid waterlogging\n• Regular field monitoring\n\nDescribe the specific symptoms you\'re seeing for targeted advice!';
      }
      if (message.includes('wheat') && (message.includes('pest') || message.includes('disease'))) {
        return '**WHEAT PEST & DISEASE MANAGEMENT:**\n\n**Common Pests:**\n• Aphids: Use neem oil or insecticidal soap\n• Armyworms: Hand-pick or use Bt-based pesticides\n• Termites: Use soil treatment with neem cake\n\n**Common Diseases:**\n• Rust: Use resistant varieties, proper spacing\n• Powdery Mildew: Improve air circulation, use sulfur\n• Head Blight: Avoid excessive nitrogen, crop rotation\n\n**Prevention:**\n• Use disease-resistant varieties\n• Proper crop rotation\n• Avoid excessive nitrogen\n• Timely sowing\n\nWhat specific symptoms are you observing in your wheat crop?';
      }
      return 'I can help with pest and disease management! To give you the most relevant advice, please specify:\n\n• Which crop is affected?\n• What symptoms are you seeing?\n• When did you first notice the problem?\n• What stage is your crop in?\n\nCommon symptoms to look for:\n• Yellowing or browning leaves\n• Holes in leaves\n• Stunted growth\n• Spots or lesions\n• Wilting or drooping\n\nDescribe what you\'re seeing, and I\'ll provide specific treatment recommendations!';
    }
    
    // Specific fertilizer questions
    if (message.includes('fertilizer') || message.includes('npk') || message.includes('urea') || message.includes('dap') || message.includes('compost')) {
      if (message.includes('rice') && message.includes('fertilizer')) {
        return '**RICE FERTILIZER RECOMMENDATIONS:**\n\n**NPK Ratio:** 120:60:40 kg/hectare\n• **Nitrogen (N):** 120 kg - Apply in 3 splits (basal, tillering, panicle initiation)\n• **Phosphorus (P):** 60 kg - Apply as basal dose\n• **Potassium (K):** 40 kg - Apply as basal dose\n\n**Application Schedule:**\n• Basal: 50% N + 100% P + 100% K at transplanting\n• Tillering: 25% N at 25-30 days\n• Panicle Initiation: 25% N at 45-50 days\n\n**Organic Options:**\n• Farmyard manure: 10-15 tons/hectare\n• Green manure: Dhaincha or Sesbania\n• Compost: 5-10 tons/hectare\n\n**Tips:**\n• Test soil before applying\n• Avoid excessive nitrogen\n• Use slow-release fertilizers\n\nWhat\'s your current soil condition and rice variety?';
      }
      if (message.includes('wheat') && message.includes('fertilizer')) {
        return '**WHEAT FERTILIZER RECOMMENDATIONS:**\n\n**NPK Ratio:** 120:60:40 kg/hectare\n• **Nitrogen (N):** 120 kg - Apply in 3 splits\n• **Phosphorus (P):** 60 kg - Apply as basal dose\n• **Potassium (K):** 40 kg - Apply as basal dose\n\n**Application Schedule:**\n• Basal: 50% N + 100% P + 100% K at sowing\n• First Top Dressing: 25% N at crown root initiation (21-25 days)\n• Second Top Dressing: 25% N at flag leaf stage (45-50 days)\n\n**Organic Options:**\n• Farmyard manure: 10-15 tons/hectare\n• Vermicompost: 2-3 tons/hectare\n• Green manure: Mustard or Dhaincha\n\n**Tips:**\n• Test soil pH (ideal: 6.5-7.5)\n• Avoid excessive nitrogen\n• Use micronutrients if deficient\n\nWhat\'s your soil type and wheat variety?';
      }
      return 'I can help with fertilizer recommendations! To give you the best advice, please specify:\n\n• Which crop are you growing?\n• What\'s your soil type?\n• Have you done a soil test?\n• What stage is your crop in?\n\n**General Fertilizer Guidelines:**\n• **NPK Ratio:** Varies by crop (typically 120:60:40)\n• **Application:** Split into 2-3 doses\n• **Timing:** Basal, vegetative, and reproductive stages\n• **Organic Options:** Compost, farmyard manure, green manure\n\n**Soil Testing:**\n• Test pH, NPK, and micronutrients\n• Adjust based on results\n• Consider organic alternatives\n\nTell me about your specific crop and soil condition!';
    }
    
    // Specific irrigation questions
    if (message.includes('irrigation') || message.includes('water') || message.includes('watering') || message.includes('drip') || message.includes('sprinkler')) {
      if (message.includes('rice') && (message.includes('irrigation') || message.includes('water'))) {
        return '**RICE IRRIGATION MANAGEMENT:**\n\n**Water Requirements:**\n• Total: 1200-1500 mm per season\n• Critical stages: Transplanting, tillering, flowering\n\n**Irrigation Methods:**\n• Traditional flooding: Maintain 5-7 cm water depth\n• Alternate Wetting and Drying (AWD): More water-efficient\n• System of Rice Intensification (SRI): Intermittent irrigation\n\n**Water-Saving Techniques:**\n• Direct seeded rice: Saves 15-20% water\n• Laser land leveling: Improves water distribution\n• Mulching: Reduces evaporation\n\n**Irrigation Schedule:**\n• Vegetative stage: 3-4 day intervals\n• Reproductive stage: Continuous shallow flooding\n• Ripening stage: Drain field 7-10 days before harvest\n\nWhat irrigation method are you currently using?';
      }
      if (message.includes('wheat') && (message.includes('irrigation') || message.includes('water'))) {
        return '**WHEAT IRRIGATION MANAGEMENT:**\n\n**Water Requirements:**\n• Total: 450-650 mm per season\n• Critical stages: Crown root initiation, tillering, flowering, grain filling\n\n**Irrigation Schedule:**\n• First irrigation: 21-25 days after sowing (CRI stage)\n• Second: 45-50 days (tillering)\n• Third: 65-70 days (jointing)\n• Fourth: 90-95 days (flowering)\n• Fifth: 110-115 days (grain filling)\n\n**Water-Saving Techniques:**\n• Sprinkler irrigation: 30-35% water savings\n• Drip irrigation: 40-50% water savings\n• Mulching: Reduces evaporation\n• Raised bed planting: Improves water use efficiency\n\n**Signs of Water Stress:**\n• Leaf rolling\n• Wilting\n• Reduced tillering\n\nWhat\'s your current irrigation method for wheat?';
      }
      return 'I can help with irrigation management! To give you the best advice, please specify:\n\n• Which crop are you growing?\n• What\'s your current irrigation method?\n• What\'s your soil type?\n• What\'s your local climate like?\n\n**Irrigation Methods Comparison:**\n• **Flood irrigation:** Simple but water-intensive\n• **Sprinkler systems:** 30-35% water savings, good for most crops\n• **Drip irrigation:** 40-50% water savings, excellent for row crops\n• **Subsurface drip:** Highest efficiency, minimal evaporation\n\n**Smart Irrigation Technologies:**\n• Soil moisture sensors\n• Weather-based controllers\n• Irrigation scheduling apps\n\nTell me more about your specific situation for tailored advice!';
    }
    
    // Specific soil questions
    if (message.includes('soil') || message.includes('ph') || message.includes('organic matter')) {
      if (message.includes('ph')) {
        return '**SOIL pH MANAGEMENT:**\n\n**Optimal pH Ranges:**\n• Most crops: 6.0-7.0\n• Rice: 5.5-6.5\n• Potatoes: 5.0-6.0\n• Legumes: 6.0-7.0\n\n**Adjusting pH:**\n• **To increase pH (acidic soil):** Add agricultural lime (calcium carbonate)\n• **To decrease pH (alkaline soil):** Add sulfur, aluminum sulfate, or organic matter\n\n**Application Rates:**\n• Lime: 2-5 tons/hectare (depends on current pH)\n• Sulfur: 300-500 kg/hectare (depends on current pH)\n\n**Best Practices:**\n• Test soil before applying amendments\n• Apply amendments 2-3 months before planting\n• Incorporate thoroughly into topsoil\n• Retest soil after 3-6 months\n\nWhat\'s your current soil pH and what crop are you planning to grow?';
      }
      if (message.includes('organic matter') || message.includes('compost')) {
        return '**IMPROVING SOIL ORGANIC MATTER:**\n\n**Benefits:**\n• Improves soil structure and water retention\n• Enhances nutrient availability\n• Supports beneficial soil organisms\n• Reduces erosion and compaction\n\n**Methods to Increase Organic Matter:**\n• **Compost:** Apply 5-10 tons/hectare annually\n• **Cover crops:** Legumes, grasses, or mixed species\n• **Crop rotation:** Include high-residue crops\n• **Reduced tillage:** Minimizes organic matter breakdown\n• **Mulching:** Protects soil and adds organic matter\n\n**Organic Amendments:**\n• Farmyard manure: 10-15 tons/hectare\n• Vermicompost: 2-5 tons/hectare\n• Green manure: Incorporate leguminous crops\n• Biochar: 5-10 tons/hectare (long-lasting carbon)\n\nWhat\'s your current soil condition and what crops are you growing?';
      }
      return '**SOIL HEALTH MANAGEMENT:**\n\n**Key Soil Health Indicators:**\n• Texture (sand, silt, clay ratio)\n• Structure (aggregation)\n• Organic matter content\n• pH level\n• Nutrient availability\n• Biological activity\n\n**Improving Soil Health:**\n• Regular soil testing (every 2-3 years)\n• Balanced fertilization based on test results\n• Crop rotation with diverse species\n• Cover cropping during off-seasons\n• Minimal tillage when possible\n• Organic matter additions\n\n**Common Soil Problems:**\n• Erosion: Use contour farming, terracing\n• Compaction: Reduce traffic, use cover crops\n• Salinization: Improve drainage, use tolerant crops\n• Nutrient depletion: Balanced fertilization\n\nWhat specific soil issue are you dealing with?';
    }
    
    // Specific weather/climate questions
    if (message.includes('weather') || message.includes('climate') || message.includes('rain') || message.includes('temperature')) {
      if (message.includes('forecast') || message.includes('prediction')) {
        return 'For accurate weather forecasts, I recommend checking reliable sources like:\n\n• Your local meteorological department\n• Weather apps with local data\n• Agricultural extension services\n\n**Weather Impact on Farming:**\n• **Short-term forecasts (1-7 days):** Plan daily activities like irrigation, spraying, harvesting\n• **Medium-term forecasts (1-4 weeks):** Plan planting, fertilizer application\n• **Seasonal forecasts:** Crop selection, variety choice\n\n**Climate-Smart Practices:**\n• Diversify crops for resilience\n• Use drought/flood-tolerant varieties\n• Implement water conservation measures\n• Consider protected cultivation\n\nWhat specific weather information do you need for your farming decisions?';
      }
      if (message.includes('drought') || message.includes('dry')) {
        return '**DROUGHT MANAGEMENT STRATEGIES:**\n\n**Water Conservation:**\n• Efficient irrigation systems (drip, micro-sprinklers)\n• Mulching to reduce evaporation\n• Rainwater harvesting and storage\n• Reduced tillage to preserve soil moisture\n\n**Crop Management:**\n• Drought-tolerant varieties\n• Adjusting planting dates\n• Proper spacing to reduce competition\n• Intercropping with drought-hardy species\n\n**Soil Management:**\n• Increase organic matter for water retention\n• Contour farming to capture rainfall\n• Deep tillage to break hardpans\n• Apply hydrogels in severe cases\n\n**Long-term Strategies:**\n• Farm ponds and water storage\n• Agroforestry systems\n• Crop diversification\n• Weather-based insurance\n\nWhat crops are you currently growing in drought-prone conditions?';
      }
      return '**WEATHER & CLIMATE CONSIDERATIONS FOR FARMING:**\n\n**Key Weather Factors:**\n• Temperature (min/max, frost dates)\n• Precipitation (amount, distribution)\n• Humidity and evaporation rates\n• Wind patterns\n• Extreme events (storms, heat waves)\n\n**Climate-Smart Practices:**\n• **Crop selection:** Choose varieties suited to local climate\n• **Planting calendar:** Adjust based on seasonal patterns\n• **Risk management:** Diversify crops, staggered planting\n• **Infrastructure:** Drainage systems, shade structures\n\n**Monitoring Tools:**\n• Weather stations\n• Soil moisture sensors\n• Growing degree day calculators\n• Climate forecasting services\n\nWhat specific weather or climate challenge are you facing in your farming operation?';
    }
    
    // Specific yield prediction questions
    if (message.includes('yield') || message.includes('prediction') || message.includes('forecast') || message.includes('harvest')) {
      if (message.includes('rice') && message.includes('yield')) {
        return '**RICE YIELD PREDICTION:**\n\n**Key Factors Affecting Rice Yield:**\n• Variety (high-yielding vs. traditional)\n• Growing season (kharif vs. rabi)\n• Water management\n• Fertilizer application\n• Pest and disease pressure\n\n**Yield Estimation Methods:**\n• **Component method:** Count panicles/m², grains/panicle, 1000-grain weight\n• **Crop cutting:** Sample harvest from representative areas\n• **Remote sensing:** NDVI and other vegetation indices\n\n**Typical Yields:**\n• Traditional varieties: 2-3 tons/hectare\n• High-yielding varieties: 4-6 tons/hectare\n• Hybrid rice: 6-8 tons/hectare\n\n**Improving Yield:**\n• Proper water management (AWD technique)\n• Balanced fertilization\n• Integrated pest management\n• Optimum plant population\n\nWhat rice variety are you growing and what has been your yield history?';
      }
      if (message.includes('wheat') && message.includes('yield')) {
        return '**WHEAT YIELD PREDICTION:**\n\n**Key Factors Affecting Wheat Yield:**\n• Variety and seed quality\n• Sowing date and method\n• Irrigation management\n• Fertilizer application\n• Pest, disease, and weed control\n\n**Yield Estimation Methods:**\n• **Component method:** Count tillers/m², grains/spike, 1000-grain weight\n• **Crop cutting:** Sample harvest from representative areas\n• **Remote sensing:** Vegetation indices from satellite data\n\n**Typical Yields:**\n• Rainfed conditions: 1.5-3 tons/hectare\n• Irrigated conditions: 3-5 tons/hectare\n• High-input systems: 5-7 tons/hectare\n\n**Improving Yield:**\n• Timely sowing (optimal window)\n• Proper seed rate and spacing\n• Balanced fertilization\n• Timely irrigation at critical stages\n\nWhat wheat variety are you growing and what has been your yield history?';
      }
      return '**CROP YIELD PREDICTION METHODS:**\n\n**Traditional Methods:**\n• Historical yield data analysis\n• Crop cutting experiments\n• Yield component analysis\n• Farmer knowledge and experience\n\n**Advanced Methods:**\n• Crop simulation models\n• Remote sensing and satellite imagery\n• Machine learning algorithms\n• Weather-based prediction models\n\n**Factors Affecting Accuracy:**\n• Data quality and availability\n• Weather variability\n• Pest and disease outbreaks\n• Management practices\n\n**Improving Predictions:**\n• Combine multiple methods\n• Regular field monitoring\n• Soil testing and plant analysis\n• Weather data integration\n\nWhich crop\'s yield are you interested in predicting?';
    }
    
    // Specific market/price questions
    if (message.includes('market') || message.includes('price') || message.includes('sell') || message.includes('profit')) {
      return '**AGRICULTURAL MARKET INSIGHTS:**\n\n**Market Research Sources:**\n• Government agricultural portals\n• Commodity exchanges\n• Agricultural extension services\n• Farmer producer organizations\n\n**Price Optimization Strategies:**\n• **Timing:** Store crops when prices are low, sell during off-season\n• **Grading & sorting:** Higher grades fetch premium prices\n• **Value addition:** Processing, packaging, branding\n• **Direct marketing:** Farmers markets, direct-to-consumer\n\n**Market Linkage Options:**\n• Contract farming\n• E-commerce platforms\n• Cooperative marketing\n• Export markets (for specialty crops)\n\n**Risk Management:**\n• Crop diversification\n• Forward contracts\n• Minimum support price schemes\n• Crop insurance\n\nWhich crop\'s market information are you interested in?';
    }
    
    // Specific organic farming questions
    if (message.includes('organic') || message.includes('natural') || message.includes('sustainable')) {
      return '**ORGANIC FARMING PRACTICES:**\n\n**Core Principles:**\n• Avoid synthetic chemicals\n• Build soil health naturally\n• Promote biodiversity\n• Maintain ecological balance\n\n**Organic Soil Management:**\n• Compost and vermicompost\n• Green manuring\n• Crop rotation\n• Cover cropping\n\n**Natural Pest Management:**\n• Beneficial insects and trap crops\n• Botanical pesticides (neem, garlic, etc.)\n• Physical barriers and traps\n• Biological control agents\n\n**Organic Certification:**\n• Transition period (typically 2-3 years)\n• Record-keeping requirements\n• Allowed inputs and practices\n• Third-party verification\n\n**Marketing Organic Produce:**\n• Premium pricing strategies\n• Direct marketing channels\n• Building consumer trust\n• Value-added processing\n\nWhat specific aspect of organic farming are you interested in?';
    }
    
    // Default response for other queries
    return 'I\'m here to help with your agricultural questions! I can provide information on:\n\n• Crop cultivation techniques\n• Pest and disease management\n• Fertilizer recommendations\n• Irrigation practices\n• Weather impacts on farming\n• Yield prediction methods\n• Soil health management\n• Market information\n• Organic farming practices\n\nPlease provide more details about your specific farming situation or question, and I\'ll give you tailored advice!';
  }, [detectTopic, setConversationContext]);
  
  // Helper functions for specific quick questions
  const getRiceCultivationGuide = () => {
    return '**RICE CULTIVATION GUIDE:**\n\n**Land Preparation:**\n• Plow 15-20 cm deep\n• Puddle and level field\n• Create drainage channels\n\n**Varieties:**\n• Short duration (100-120 days)\n• Medium duration (120-140 days)\n• Long duration (140-160 days)\n\n**Sowing Methods:**\n• Transplanting: 20-25 days old seedlings\n• Direct seeding: 20-25 kg/hectare\n• SRI method: 8-12 days old seedlings\n\n**Fertilizer (NPK):**\n• 120:60:40 kg/hectare\n• Apply in 3 splits\n\n**Water Management:**\n• Maintain 5 cm water until flowering\n• Alternate wetting and drying saves water\n• Drain 7-10 days before harvest\n\n**Pest Management:**\n• Monitor regularly\n• Use resistant varieties\n• Integrated pest management\n\n**Harvesting:**\n• When 80-85% grains turn golden yellow\n• Moisture content 20-22%\n• Dry to 14% for storage\n\nWhat specific aspect of rice cultivation would you like to know more about?';
  };
  
  const getWheatFertilizerSchedule = () => {
    return '**WHEAT FERTILIZER SCHEDULE:**\n\n**NPK Recommendation:** 120:60:40 kg/hectare\n\n**Basal Application (at sowing):**\n• 50% Nitrogen (60 kg/ha)\n• 100% Phosphorus (60 kg/ha)\n• 100% Potassium (40 kg/ha)\n\n**First Top Dressing:**\n• 25% Nitrogen (30 kg/ha)\n• Apply at crown root initiation stage (21-25 days)\n\n**Second Top Dressing:**\n• 25% Nitrogen (30 kg/ha)\n• Apply at flag leaf stage (45-50 days)\n\n**Micronutrients (if deficient):**\n• Zinc: 25 kg ZnSO₄/ha\n• Iron: Foliar spray of 0.5% FeSO₄\n• Boron: 10 kg Borax/ha\n\n**Organic Options:**\n• Farmyard manure: 10-15 tons/ha (apply 2-3 weeks before sowing)\n• Vermicompost: 5 tons/ha\n• Biofertilizers: Azotobacter and PSB\n\n**Application Methods:**\n• Broadcast and incorporate before sowing\n• Band placement for phosphorus\n• Top dressing along rows for nitrogen\n\nWhat\'s your soil type and wheat variety?';
  };
  
  const getSoilPHManagement = () => {
    return '**SOIL pH MANAGEMENT GUIDE:**\n\n**Optimal pH Ranges:**\n• Field crops: 5.5-7.0\n• Vegetables: 6.0-7.0\n• Fruits: 5.5-7.0\n• Legumes: 6.0-7.0\n\n**Testing Methods:**\n• Professional soil testing lab (most accurate)\n• Home testing kits (reasonable accuracy)\n• Digital pH meters (quick results)\n\n**Adjusting Acidic Soil (Low pH):**\n• **Materials:** Agricultural lime, dolomitic lime\n• **Application Rate:** 2-5 tons/hectare (depends on current pH)\n• **Timing:** 2-3 months before planting\n• **Method:** Broadcast and incorporate into topsoil\n\n**Adjusting Alkaline Soil (High pH):**\n• **Materials:** Elemental sulfur, aluminum sulfate\n• **Application Rate:** 300-500 kg/hectare (depends on current pH)\n• **Timing:** 3-6 months before planting (sulfur works slowly)\n• **Method:** Broadcast and incorporate into topsoil\n\n**Organic Methods:**\n• **For acidic soil:** Wood ash, crushed eggshells\n• **For alkaline soil:** Peat moss, pine needles, sulfur-containing organic matter\n\n**Maintenance:**\n• Retest soil every 2-3 years\n• Use pH-appropriate fertilizers\n• Consider raised beds for problem areas\n\nWhat\'s your current soil pH and what crops are you growing?';
  };
  
  const getPestControlForCrops = () => {
    return '**INTEGRATED PEST MANAGEMENT (IPM) FOR CROPS:**\n\n**Prevention Strategies:**\n• Use resistant varieties\n• Maintain field sanitation\n• Practice crop rotation\n• Adjust planting dates\n• Encourage beneficial insects\n\n**Monitoring Methods:**\n• Regular field scouting (2x weekly)\n• Pheromone traps\n• Yellow sticky traps\n• Light traps\n• Economic threshold monitoring\n\n**Control Methods:**\n\n**1. Cultural Controls:**\n• Crop rotation\n• Trap crops\n• Adjusting planting dates\n• Field sanitation\n\n**2. Mechanical Controls:**\n• Handpicking pests\n• Pruning affected parts\n• Barriers and traps\n• Tillage practices\n\n**3. Biological Controls:**\n• Beneficial insects (ladybugs, lacewings)\n• Predatory mites\n• Parasitic wasps\n• Microbial agents (Bt, Trichoderma)\n\n**4. Chemical Controls (Last Resort):**\n• Selective pesticides\n• Spot treatments\n• Proper timing and application\n• Rotation of active ingredients\n\n**5. Organic Options:**\n• Neem oil\n• Pyrethrum\n• Diatomaceous earth\n• Insecticidal soaps\n\nWhat specific pest problem are you dealing with?';
  };
  
  const getIrrigationTiming = () => {
    return '**IRRIGATION TIMING GUIDE:**\n\n**Critical Growth Stages for Irrigation:**\n\n**Rice:**\n• Transplanting/establishment\n• Tillering\n• Panicle initiation\n• Flowering\n\n**Wheat:**\n• Crown root initiation (21-25 days)\n• Tillering (40-45 days)\n• Jointing (60-65 days)\n• Flowering (80-85 days)\n• Grain filling (100-105 days)\n\n**Maize:**\n• Knee-high stage\n• Tasseling\n• Silking\n• Grain filling\n\n**Pulses:**\n• Flowering\n• Pod formation\n• Pod filling\n\n**Irrigation Scheduling Methods:**\n\n**1. Soil Moisture Based:**\n• Feel and appearance method\n• Tensiometers (irrigate at 30-40 kPa for most crops)\n• Soil moisture sensors\n\n**2. Evapotranspiration Based:**\n• Pan evaporation data\n• Crop coefficient (Kc) values\n• Weather-based calculations\n\n**3. Growth Stage Based:**\n• Calendar-based scheduling\n• Growing degree days\n• Visible plant indicators\n\n**Water-Saving Techniques:**\n• Deficit irrigation at less sensitive stages\n• Alternate furrow irrigation\n• Mulching to reduce evaporation\n• Night irrigation to reduce losses\n\nWhat crop are you growing and what\'s your current irrigation method?';
  };
  
  const getYieldPredictionMethods = () => {
    return '**YIELD PREDICTION METHODS:**\n\n**1. Component Method:**\n• Count plants per unit area\n• Measure yield components (e.g., grains per panicle)\n• Calculate potential yield\n\n**Formula for Cereals:**\n• Yield = Plants/m² × Tillers/plant × Grains/tiller × Grain weight\n\n**2. Crop Cutting Experiments:**\n• Select representative sample areas\n• Harvest and weigh produce\n• Extrapolate to full field\n\n**3. Remote Sensing Approaches:**\n• Vegetation indices (NDVI, EVI)\n• Satellite imagery analysis\n• Drone-based assessment\n\n**4. Crop Simulation Models:**\n• DSSAT, APSIM, AquaCrop\n• Requires detailed input data\n• Can simulate different scenarios\n\n**5. Machine Learning Models:**\n• Historical yield data\n• Weather parameters\n• Soil characteristics\n• Management practices\n\n**Factors Affecting Accuracy:**\n• Weather variability\n• Pest and disease outbreaks\n• Management decisions\n• Data quality\n\n**Practical Tips:**\n• Combine multiple methods\n• Consider field variability\n• Update predictions as season progresses\n• Document actual yields for future reference\n\nWhich crop\'s yield are you interested in predicting?';
  };
  
  // Function to handle sending messages - optimized with useCallback
  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim() || isTyping) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate typing delay with optimized timing
    const typingDelay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      const botResponseText = getBotResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Update conversation context with the response and generate follow-up questions
      setConversationContext(prev => {
        const topic = prev.currentTopic || detectTopic(inputValue);
        const followUps = generateFollowUpQuestions(topic, botResponseText);
        const relatedTopics = generateRelatedTopics(topic);
        
        return {
          ...prev,
          previousResponses: [...prev.previousResponses.slice(-4), botResponseText], // Keep last 5 responses
          followUpQuestions: followUps,
          relatedTopics: relatedTopics
        };
      });
      
      setIsTyping(false);
      // Focus input field after bot responds
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }, typingDelay);
  }, [detectTopic, generateFollowUpQuestions, generateRelatedTopics, getBotResponse, inputValue]);

  const handleQuickQuestion = useCallback((question: string) => {
    // Directly send the quick question without setting input value
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay with optimized timing
    const typingDelay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      const botResponseText = getBotResponse(question);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Update conversation context with the response and generate follow-up questions
      setConversationContext(prev => {
        const topic = prev.currentTopic || detectTopic(question);
        const followUps = generateFollowUpQuestions(topic, botResponseText);
        const relatedTopics = generateRelatedTopics(topic);
        
        return {
          ...prev,
          previousResponses: [...prev.previousResponses.slice(-4), botResponseText], // Keep last 5 responses
          followUpQuestions: followUps,
          relatedTopics: relatedTopics
        };
      });
      
      setIsTyping(false);
      // Focus input field after bot responds
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }, typingDelay);
  }, [detectTopic, generateFollowUpQuestions, generateRelatedTopics, getBotResponse]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const formatTime = useMemo(() => {
    return (date: Date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 shadow-2xl border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-sm">{t('agriAssistant')}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {t('online')}
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col h-72">
              <ScrollArea className="flex-1 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex mb-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex gap-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'bg-primary' : 'bg-muted'}`}
                      >
                        {message.isUser ? (
                          <User className="w-4 h-4 text-primary-foreground" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`rounded-lg p-3 text-sm ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                        >
                          {message.text.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex mb-3 justify-start">
                    <div className="flex gap-2 max-w-[85%]">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="rounded-lg p-3 text-sm bg-muted">
                          <div className="flex gap-1">
                            <span className="animate-bounce">•</span>
                            <span className="animate-bounce delay-100">•</span>
                            <span className="animate-bounce delay-200">•</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              {/* Quick questions */}
              {messages.length < 3 && (
                <div className="px-4 py-2 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">{t('quickQuestions')}:</div>
                  <div className="flex flex-wrap gap-1">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Follow-up questions */}
              {messages.length >= 3 && conversationContext.followUpQuestions.length > 0 && (
                <div className="px-4 py-2 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">{t('followUpQuestions')}:</div>
                  <div className="flex flex-wrap gap-1">
                    {conversationContext.followUpQuestions.slice(0, 3).map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="p-4 border-t border-border mt-auto">
                <div className="flex gap-2">
                  <Input
                    placeholder={t('typeMessage')}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    ref={inputRef}
                    disabled={isTyping}
                    className="flex-1 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                    className="px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-transform"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;