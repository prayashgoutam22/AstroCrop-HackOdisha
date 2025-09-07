import { SoilAnalysisCard } from "@/components/SoilAnalysisCard";
import { CropDiseaseDetection } from "@/components/CropDiseaseDetection";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

export default function SoilPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link to="/">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-6">Soil & Disease Analysis</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="h-full">
            <SoilAnalysisCard />
          </div>
          <div className="h-full">
            <CropDiseaseDetection />
          </div>
        </div>
      </main>
    </div>
  );
}