import {
  Droplets,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IrrigationEvent {
  day: number;
  stage: string;
  amount: number;
  method: string;
  priority: "high" | "medium" | "low";
  completed?: boolean;
}

interface IrrigationCalendarCardProps {
  irrigationSchedule: IrrigationEvent[];
  onAddEvent: (day: number) => void;
  onEventClick: (day: number) => void;
  newEventDay?: number;
  isAddEventOpen: boolean;
}

export function IrrigationCalendarCard({
  irrigationSchedule,
  onAddEvent,
  onEventClick,
  newEventDay,
  isAddEventOpen,
}: IrrigationCalendarCardProps) {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const getIrrigationForDay = (day: number) => {
    return irrigationSchedule.find((event) => event.day === day);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  return (
    <Card className="shadow-card h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            Irrigation Calendar
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth} className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center">
              {currentMonth.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <Button variant="outline" size="icon" onClick={nextMonth} className="h-7 w-7">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Calendar Grid */}
        <div className="space-y-2">
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2 text-muted-foreground font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="h-16 p-1" />
            ))}
            {days.map((day) => {
              const event = getIrrigationForDay(day);
              return (
                <div
                  key={day}
                  className={cn(
                    "h-16 p-1 relative rounded-lg border cursor-pointer hover:bg-muted/30 transition-all duration-200",
                    day === newEventDay && isAddEventOpen
                      ? "bg-primary/20 border-primary ring-2 ring-primary ring-offset-1"
                      : "",
                    event
                      ? event.completed
                        ? "bg-green-100 dark:bg-green-900/30 border-green-500"
                        : "bg-accent/10 border-accent"
                      : "border-border"
                  )}
                  onClick={() => {
                    onEventClick(day);
                    onAddEvent(day);
                  }}
                >
                  <span
                    className={cn(
                      "text-sm font-medium",
                      day === newEventDay && isAddEventOpen
                        ? "font-bold text-primary"
                        : ""
                    )}
                  >
                    {day}
                  </span>
                  {event && (
                    <div className="absolute bottom-1 left-1 right-1">
                      <div
                        className={cn(
                          "text-xs rounded px-1 py-0.5 truncate text-center",
                          event.completed
                            ? "bg-green-200 dark:bg-green-900/50 dark:text-green-100"
                            : "bg-accent/20 dark:bg-accent/30"
                        )}
                      >
                        {event.amount}mm
                        {event.completed && (
                          <Check className="h-3 w-3 inline ml-1" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Add Event Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddEvent(1)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Irrigation Event
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
