import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const CVContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-white dark:bg-gray-950 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <Avatar className="w-48 h-48 mb-4 border-4 border-blue-600 dark:border-blue-400 shadow-lg"> {/* Added shadow-lg here */}
          <AvatarImage src="/images/kamil-robak-profile.png" alt="Kamil Robak" className="scale-110 object-cover" />
          <AvatarFallback className="text-6xl font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">KR</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">Kamil Robak</h1>
        <p className="text-2xl text-blue-700 dark:text-blue-400 font-semibold max-w-2xl">
          Architekt Systemów AI | Specjalista ds. "Vibecodingu" i Szybkiego Prototypowania MVP
        </p>
      </div>

      <Separator className="my-10 bg-blue-200 dark:bg-blue-800 h-0.5" />

      {/* Professional Profile */}
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Profil Zawodowy</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-4 text-justify">
          <p>
            Specjalizuję się w "vibecodingu" – przekształcaniu abstrakcyjnych wizji w działające, interaktywne prototypy za pomocą poleceń tekstowych i nowoczesnych narzędzi AI. Moją pasją jest dekonstrukcja złożonych problemów i projektowanie dla nich eleganckich, minimalistycznych rozwiązań, które można wdrożyć w ciągu kilku dni, a nie miesięcy.
          </p>
          <p>
            Nie jestem typowym programistą. Jestem Orkiestratorem AI – używam zaawansowanych modeli językowych (jak Gemini) i platform (jak Replit) jako zespołu wirtualnych ekspertów, by błyskawicznie budować kompletne aplikacje (frontend + backend + baza danych).
          </p>
        </CardContent>
      </Card>

      <Separator className="my-10 bg-blue-200 dark:bg-blue-800 h-0.5" />

      {/* Selected Case Studies */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">Wybrane Studia Przypadku</h2>

      <div className="grid gap-8 md:grid-cols-1">
        {/* Case Study 1 */}
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">1. Projekt "Asystent Eksperta AI" (Architektura Systemu i Backend)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
            <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie bezpiecznego i skutecznego narzędzia AI dla specjalistów, które nie jest generycznym chatbotem.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Zaprojektowałem i wdrożyłem funkcjonalny, oparty na Node.js i API Gemini, prototyp "Asystenta Psychologa Dziecięcego" z wbudowanymi protokołami bezpieczeństwa i logiką do prowadzenia ustrukturyzowanych wywiadów.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Myślenie systemowe, inżynieria promptów, umiejętności backendowe (Express, obsługa API) i zrozumienie potrzeb specjalistycznej niszy.</p>
          </CardContent>
        </Card>

        {/* Case Study 2 */}
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">2. Projekt "Interaktywny Prototyp Sprzedażowy" (Frontend i UX)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
            <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zwiększenie konwersji i skrócenie procesu sprzedaży dla firmy usługowej.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzyłem w pełni działający, interaktywny prototyp systemu rezerwacji, który automatyzuje proces wstępnej wyceny i zapisu klientów.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Błyskawiczna egzekucja od pomysłu do działającego produktu, umiejętności frontendowe (HTML/CSS/JS) i projektowanie intuicyjnych interfejsów.</p>
          </CardContent>
        </Card>

        {/* Case Study 3 - New Project */}
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">3. Projekt "Eksperci od Klimatyzacji" (Kompleksowa Aplikacja Webowa Full-Stack)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
            <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie wszechstronnej platformy online dla firmy klimatyzacyjnej, integrującej interaktywne narzędzia dla klientów z zaawansowanym panelem administracyjnym.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Zaprojektowałem i wdrożyłem pełną aplikację webową (React.js, TypeScript, Node.js, Express.js, PostgreSQL/Supabase), zawierającą publiczny serwis z kalkulatorem cen i porównywarką modeli, oraz rozbudowany CMS do zarządzania treścią bloga, formularzami i zgłoszeniami serwisowymi, w tym obsługą załączników.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Rozwój full-stack, integracja z bazą danych (Supabase), budowa niestandardowego CMS i implementacja interaktywnych narzędzi użytkownika.</p>
          </CardContent>
        </Card>

        {/* Case Study 4 (formerly Case Study 3) */}
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">4. Projekt "Operator's Manual" (Dekonstrukcja Problemu)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
            <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zdiagnozowanie i stworzenie systemu do zarządzania złożonymi wzorcami poznawczymi.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzenie analitycznego dokumentu, który doprowadził do formalnej diagnozy ADHD i wdrożenia skutecznych strategii.</p>
            <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Elitarna zdolność do dekonstrukcji "brudnych", nieliniowych problemów i przekształcania wglądu w ustrukturyzowane, działające systemy.</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10 bg-blue-200 dark:bg-blue-800 h-0.5" />

      {/* Collaboration Model */}
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Model Współpracy</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
          <p>
            Specjalizuję się w krótkich, intensywnych "sprintach strategicznych", których celem jest dostarczenie maksymalnej wartości w minimalnym czasie – od audytu i diagnozy problemu po stworzenie działającego prototypu rozwiązania.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-10 bg-blue-200 dark:bg-blue-800 h-0.5" />

      {/* Contact Section */}
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Kontakt</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-2">
          <p>
            Chętnie odpowiem na wszelkie pytania i omówię potencjalne projekty. Zapraszam do kontaktu!
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:twoj.email@example.com" className="text-blue-600 hover:underline dark:text-blue-400">twoj.email@example.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/twojprofil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">linkedin.com/in/twojprofil</a>
          </p>
          <p>
            <strong>Telefon:</strong> +48 123 456 789
          </p>
        </CardContent>
      </Card>

      {/* Made with Dyad component */}
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default CVContent;