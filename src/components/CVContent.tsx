import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const CVContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl bg-white dark:bg-gray-950 rounded-lg shadow-xl">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <Avatar className="w-32 h-32 mb-4 border-4 border-blue-500 dark:border-blue-400 shadow-md">
          <AvatarImage src="/images/kamil-robak-profile.png" alt="Kamil Robak" />
          <AvatarFallback className="text-4xl font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">KR</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2">Kamil Robak</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
          Architekt Systemów AI | Specjalista ds. "Vibecodingu" i Szybkiego Prototypowania MVP
        </p>
      </div>

      <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />

      {/* Professional Profile */}
      <Card className="mb-8 shadow-lg border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">Profil Zawodowy (Twoja Filozofia)</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          <p className="mb-4">
            Specjalizuję się w "vibecodingu" – przekształcaniu abstrakcyjnych wizji w działające, interaktywne prototypy za pomocą poleceń tekstowych i nowoczesnych narzędzi AI. Moją pasją jest dekonstrukcja złożonych problemów i projektowanie dla nich eleganckich, minimalistycznych rozwiązań, które można wdrożyć w ciągu kilku dni, a nie miesięcy.
          </p>
          <p>
            Nie jestem typowym programistą. Jestem Orkiestratorem AI – używam zaawansowanych modeli językowych (jak Gemini) i platform (jak Replit) jako zespołu wirtualnych ekspertów, by błyskawicznie budować kompletne aplikacje (frontend + backend + baza danych).
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />

      {/* Selected Case Studies */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">Wybrane Studia Przypadku (Dowody Kompetencji w "Vibecodingu")</h2>

      <div className="grid gap-6 md:grid-cols-1">
        {/* Case Study 1 */}
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. Projekt "Asystent Eksperta AI" (Architektura Systemu i Backend)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-justify">
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie bezpiecznego i skutecznego narzędzia AI dla specjalistów, które nie jest generycznym chatbotem.</p>
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Zaprojektowałem i wdrożyłem funkcjonalny, oparty na Node.js i API Gemini, prototyp "Asystenta Psychologa Dziecięcego" z wbudowanymi protokołami bezpieczeństwa i logiką do prowadzenia ustrukturyzowanych wywiadów.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Myślenie systemowe, inżynieria promptów, umiejętności backendowe (Express, obsługa API) i zrozumienie potrzeb specjalistycznej niszy.</p>
          </CardContent>
        </Card>

        {/* Case Study 2 */}
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. Projekt "Interaktywny Prototyp Sprzedażowy" (Frontend i UX)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-justify">
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zwiększenie konwersji i skrócenie procesu sprzedaży dla firmy usługowej.</p>
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzyłem w pełni działający, interaktywny prototyp systemu rezerwacji, który automatyzuje proces wstępnej wyceny i zapisu klientów.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Błyskawiczna egzekucja od pomysłu do działającego produktu, umiejętności frontendowe (HTML/CSS/JS) i projektowanie intuicyjnych interfejsów.</p>
          </CardContent>
        </Card>

        {/* Case Study 3 */}
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">3. Projekt "Operator's Manual" (Dekonstrukcja Problemu)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-justify">
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zdiagnozowanie i stworzenie systemu do zarządzania złożonymi wzorcami poznawczymi.</p>
            <p className="mb-2"><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzenie analitycznego dokumentu, który doprowadził do formalnej diagnozy ADHD i wdrożenia skutecznych strategii.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Elitarna zdolność do dekonstrukcji "brudnych", nieliniowych problemów i przekształcania wglądu w ustrukturyzowane, działające systemy.</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />

      {/* Collaboration Model */}
      <Card className="mb-8 shadow-lg border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">Model Współpracy</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          <p>
            Nie szukam pracy "na godzinę". Szukam partnera do budowy innowacyjnych produktów cyfrowych. Specjalizuję się w krótkich, intensywnych "sprintach", których celem jest dostarczenie działającego, wysokiej jakości MVP w 7-14 dni.
          </p>
        </CardContent>
      </Card>

      {/* Made with Dyad component */}
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default CVContent;