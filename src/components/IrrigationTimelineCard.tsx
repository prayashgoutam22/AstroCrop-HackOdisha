import {
  Droplets,
  Clock,
  X,
  Check,
  AlertTriangle,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

interface IrrigationEvent {
  day: number;
  stage: string;
  amount: number;
  method: string;
  priority: "high" | "medium" | "low";
  completed?: boolean;
}

interface IrrigationTimelineCardProps {
  irrigationSchedule: IrrigationEvent[];
  totalWater: number;
  onToggleCompletion: (index: number) => void;
  onRemoveEvent: (index: number) => void;
}

export function IrrigationTimelineCard({
  irrigationSchedule,
  totalWater,
  onToggleCompletion,
  onRemoveEvent,
}: IrrigationTimelineCardProps) {
  const { t } = useLanguage();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <Card className="shadow-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Irrigation Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Total Water Requirement */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
          <Droplets className="h-5 w-5 text-accent" />
          <div>
            <p className="text-sm text-muted-foreground">
              Total Water Requirement
            </p>
            <p className="text-lg font-bold text-accent">
              {totalWater} mm/season
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground">
            Upcoming Events
          </h4>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {irrigationSchedule.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < irrigationSchedule.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-8 bg-border"></div>
                )}

                <div
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg transition-colors",
                    event.completed
                      ? "bg-green-50 dark:bg-green-900/20"
                      : "bg-muted/30 hover:bg-muted/50 dark:hover:bg-muted/20"
                  )}
                >
                  {/* Checkbox */}
                  <div className="mt-1">
                    <Checkbox
                      checked={event.completed}
                      onCheckedChange={() => onToggleCompletion(index)}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`w-8 h-8 rounded-full ${getPriorityColor(
                      event.priority
                    )} flex items-center justify-center flex-shrink-0`}
                  >
                    <Clock className="h-4 w-4 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "font-medium text-sm",
                            event.completed &&
                              "line-through text-muted-foreground"
                          )}
                        >
                          Day {event.day}
                        </span>
                        <Badge
                          variant={getPriorityVariant(event.priority)}
                          className="text-xs"
                        >
                          {event.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-accent">
                          {event.amount} mm
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => onRemoveEvent(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p
                      className={cn(
                        "text-sm text-muted-foreground mb-1",
                        event.completed && "line-through"
                      )}
                    >
                      {event.stage}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {event.method}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Water Management Tips */}
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
          <h5 className="font-medium text-sm text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Water Management Tips
          </h5>
          <ul className="text-xs text-blue-800 dark:text-blue-300 space-y-1">
            <li>• Apply water directly to root zone</li>
            <li>• Use soil moisture sensors</li>
            <li>• Implement deficit irrigation</li>
            <li>• Collect rainwater when possible</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
