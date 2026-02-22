import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Animal } from "@/data/animals";

interface AnimalCardProps {
  animal: Animal;
  onLearnMore?: (animal: Animal) => void;
}

const AnimalCard = ({ animal, onLearnMore }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={animal.image}
          alt={`${animal.name} - ${animal.breed} available for adoption`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm"
          >
            {animal.species === "dog" ? "🐕" : "🐈"} {animal.species}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl font-bold">{animal.name}</h3>
          <Heart className="h-5 w-5 text-primary cursor-pointer hover:fill-primary transition-colors" />
        </div>
        <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
          <span>{animal.breed}</span>
          <span>•</span>
          <span>{animal.age}</span>
          <span>•</span>
          <span>{animal.gender}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {animal.temperament.slice(0, 3).map((t) => (
            <Badge key={t} variant="outline" className="text-xs rounded-full">
              {t}
            </Badge>
          ))}
        </div>
        {onLearnMore && (
          <Button
            onClick={() => onLearnMore(animal)}
            className="w-full mt-2 rounded-full"
            variant="outline"
          >
            Learn More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
