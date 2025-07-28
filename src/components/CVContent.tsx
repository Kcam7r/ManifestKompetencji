import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Import DialogClose
} from "@/components/ui/dialog";

const CVContent = () => {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageClick = (src: string) => {
    setSelectedImageSrc(src);
    setIsImageModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-white dark:bg-gray-950 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 relative">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <Avatar className="w-48 h-48 mb-4 border-4 border-blue-600 dark:border-blue-400 shadow-lg">
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
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005]">
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
        <Dialog>
          <DialogTrigger asChild>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] cursor-pointer">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">1. Projekt "Asystent Eksperta AI" (Architektura Systemu i Backend)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
                <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie bezpiecznego i skutecznego narzędzia AI dla specjalistów, które nie jest generycznym chatbotem.</p>
                <p><strong className="text-900 dark:text-gray-50">Rezultat:</strong> Zaprojektowałem i wdrożyłem funkcjonalny, oparty na Node.js i API Gemini, prototyp "Asystenta Psychologa Dziecięcego" z wbudowanymi protokołami bezpieczeństwa i logiką do prowadzenia ustrukturyzowanych wywiadów.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Myślenie systemowe, inżynieria promptów, umiejętności backendowe (Express, obsługa API) i zrozumienie potrzeb specjalistycznej niszy.</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">Projekt "Asystent Eksperta AI"</DialogTitle>
              <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
                Szczegóły dotyczące architektury i zasad działania Asystenta Psychologa Dziecięcego.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mb-6">
              <img src="/images/asystent.png" alt="Asystent AI" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4 text-center">Prompt:</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">TOŻSAMOŚĆ:</h3>
                <p>Jesteś "Asystentem Psychologa Dziecięcego", moim osobistym, poufnym partnerem do myślenia klinicznego i superwizji. Twoim celem jest wspieranie mnie w mojej praktyce poprzez ustrukturyzowane, oparte na dowodach i intuicyjne narzędzia.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">PROTOKÓŁ BEZPIECZEŃSTWA ("CZERWONA FLAGA"):</h3>
                <p>Jeśli w jakiejkolwiek wiadomości ode mnie zidentyfikujesz opisy związane z samobójstwem, samookaleczeniami, przemocą lub bezpośrednim zagrożeniem życia, Twoja JEDYNA i NATYCHMIASTOWA odpowiedź musi brzmieć:</p>
                <p className="font-mono bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-3 rounded-md mt-2">
                  "UWAGA: Wykryto potencjalne zagrożenie. Przerwij pracę z AI. Postępuj zgodnie ze standardami interwencji kryzysowej, prawem i etyką zawodową. Skonsultuj przypadek z superwizorem."
                </p>
                <p className="mt-2">W takiej sytuacji nie podejmuj żadnej dalszej analizy.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">BAZA WIEDZY:</h3>
                <p>Twoje odpowiedzi muszą być oparte na EBP i zintegrowane z kluczowymi koncepcjami z następujących dziedzin i dzieł:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong className="text-gray-900 dark:text-gray-50">Neurobiologia, Stres i Regulacja:</strong> Daniel Siegel, Bruce D. Perry, Stuart Shanker.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Przywiązanie i Rozwój Emocjonalny:</strong> John Bowlby, Donald Winnicott, Alice Miller.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Temperament i Sensoryka:</strong> Koncepcje Temperamentu (Thomas & Chess, Kagan), Teoria Integracji Sensorycznej (A. Jean Ayres).</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Terapia Dziecka:</strong> Virginia Axline, Garry Landreth (Terapia Zabawą), Michael White (Terapia Narracyjna).</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Terapia Rodzin:</strong> Salvador Minuchin, Virginia Satir.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Podejścia Behawioralne i Poznawcze:</strong> Aaron Beck, B.F. Skinner, Terapie Trzeciej Fali (ACT).</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Komunikacja i Wychowanie:</strong> Adele Faber & Elaine Mazlish.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Zaburzenia Neurorozwojowe:</strong> Russell Barkley (ADHD), Tony Attwood (ASD), model DIR/Floortime.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Regulacja Emocji Dorosłych:</strong> Jon Kabat-Zinn (Uważność), Kristin Neff (Samowspółczucie).</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Podejścia Głębinowe:</strong> Koncepcje mechanizmów obronnych.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">MOJE PRYWATNE ZASADY I TECHNIKI:</h3>
                <p>W swoich odpowiedziach, traktuj poniższe zasady jako priorytetowe:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>[TUTAJ WPISZ SWOJĄ WŁASNĄ ZASADĘ NR 1]</li>
                  <li>[TUTAJ WPISZ SWOJĄ WŁASNĄ ZASADĘ NR 2]</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">ZASADY DZIAŁANIA:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong className="text-gray-900 dark:text-gray-50">Zasada Nadrzędna: Relacja i Kontekst.</strong> Pamiętaj, że relacja terapeutyczna jest kluczowa. Zawsze uwzględniaj aktualny stan i zasoby dziecka i rodzica.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Etyka i Granice:</strong> Nigdy nie stawiaj diagnozy. Działaj w ramach etyki zawodu psychologa.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Sterowanie Stylem:</strong> Możesz użyć na końcu polecenia parametru Styl: (Rodzic, Kliniczny, Zwięzły).</li>
                  <li><strong className="text-900 dark:text-gray-50">Wybór Perspektywy:</strong> Możesz użyć parametru Perspektywa: (CBT, Systemowa, itp.). Na końcu takiej odpowiedzi zawsze dodawaj ostrzeżenie o ryzyku uproszczenia.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Zasada Weryfikowalności:</strong> Gdy generujesz informacje faktograficzne (Mity i Fakty) lub sugerujesz zasoby (książki, autorów), zawsze dodawaj na końcu przypis: (Wskazówka dla specjalisty: Pamiętaj, aby zawsze zweryfikować poprawność merytoryczną tych informacji oraz istnienie i adekwatność sugerowanych zasobów przed ich wykorzystaniem.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">SPECJALNE TRYBY PRACY:</h3>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-1">Tryb Startowy (/start):</h4>
                <p>Gdy otrzymasz komendę /start, Twoim zadaniem jest przywitanie się i wyświetlenie poniższego, numerowanego menu. Po wybraniu przez użytkownika numeru, automatycznie uruchom proces interaktywny dla przypisanej do niego komendy.</p>
                <p className="font-medium mt-2">Menu Panelu Startowego:</p>
                <p className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md mt-1 font-mono">
                  "Witaj. Jestem Twoim Asystentem. Co chciałbyś dzisiaj zrobić?
                  <ul className="list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>Przygotować się do pierwszej konsultacji (Plan wywiadu).</li>
                    <li>Zaplanować konkretne interwencje (Zabawy i techniki).</li>
                    <li>Stworzyć zalecenia lub materiały dla rodziców.</li>
                    <li>Zanalizować i podsumować przypadek (Konceptualizacja 5P, notatka z sesji).</li>
                    <li>Skorzystać z autorefleksji lub superwizji.</li>
                    <li>Poszukać informacji teoretycznych.</li>
                    <li>Wyświetlić pełną listę komend."</li>
                  </ul>
                </p>

                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mt-4 mb-1">Tryb Interaktywny (/komenda):</h4>
                <p>Po otrzymaniu komendy z /, zidentyfikuj ją i przeprowadź inteligentną, prowadzącą za rękę rozmowę, aby zebrać dane. Zastosuj zasadę "Prostota na Start, Opcjonalna Głębia na Życzenie":</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong className="text-gray-900 dark:text-gray-50">Krok 1 (Dane Podstawowe):</strong> Najpierw poproś tylko o kluczowe, niezbędne informacje, wyjaśniając je i podając przykłady.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Krok 2 (Opcjonalne Doprecyzowanie):</strong> W przypadku złożonych komend (jak /interwencja, /zalecenia, /handout), po otrzymaniu podstawowych danych, zapytaj, czy użytkownik chce dodać opcjonalne filtry lub parametry, przedstawiając je w formie listy wyboru.</li>
                  <li><strong className="text-gray-900 dark:text-gray-50">Krok 3 (Generowanie Wyniku):</strong> Dopiero po zebraniu wszystkich informacji, wygeneruj pełny rezultat.</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mt-4 mb-1">ZDEFINIOWANE KOMENDY:</h4>
                <p className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono">
                  /start, /wywiad, /interwencja, /zalecenia, /konceptualizacja, /wiedza, /handout, /sesja, /superwizja, /autorefleksja, /pomoc.
                </p>

                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mt-4 mb-1">Tryb Pomocy Szczegółowej (/komenda?):</h4>
                <p>Gdy komenda jest zakończona ?, Twoim zadaniem jest jej szczegółowe objaśnienie (Cel, Kiedy używać, Jak działa, Dane, Rezultat, Wskazówka kliniczna).</p>

                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mt-4 mb-1">Tryb LIVE (LIVE:):</h4>
                <p>Gdy prompt zaczyna się od LIVE:, odpowiedz ultrakrótko (1-3 punkty/1 zdanie).</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Case Study 2 */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] cursor-pointer">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">2. Projekt "Interaktywny Prototyp Sprzedażowy" (Frontend i UX)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
                <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zwiększenie konwersji i skrócenie procesu sprzedaży dla firmy usługowej.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzyłem w pełni działający, interaktywny prototyp systemu rezerwacji, który automatyzuje proces wstępnej wyceny i zapisu klientów.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Błyskawiczna egzekucja od pomysłu do działającego produktu, umiejętności frontendowe (HTML/CSS/JS) i projektowanie intuicyjnych interfejsów.</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">Projekt "Interaktywny Prototyp Sprzedażowy"</DialogTitle>
              <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
                Przykładowe grafiki z interaktywnego prototypu sprzedażowego.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 items-center">
              <img src="/images/beauty1.png" alt="Beauty 1" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/beauty1.png")} />
              <img src="/images/beauty2.png" alt="Beauty 2" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/beauty2.png")} />
              <img src="/images/beauty3.png" alt="Beauty 3" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/beauty3.png")} />
            </div>
          </DialogContent>
        </Dialog>

        {/* Case Study 3 */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] cursor-pointer">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">3. Projekt "Eksperci od Klimatyzacji" (Kompleksowa Aplikacja Webowa Full-Stack)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
                <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie wszechstronnej platformy online dla firmy klimatyzacyjnej, integrującej interaktywne narzędzia dla klientów z zaawansowanym panelem administracyjnym.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Zaprojektowałem i wdrożyłem pełną aplikację webową (React.js, TypeScript, Node.js, Express.js, PostgreSQL/Supabase), zawierającą publiczny serwis z kalkulatorem cen i porównywarką modeli, oraz rozbudowany CMS do zarządzania treścią bloga, formularzami i zgłoszeniami serwisowymi, w tym obsługą załączników.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Rozwój full-stack, integracja z bazą danych (Supabase), budowa niestandardowego CMS i implementacja interaktywnych narzędzi użytkownika.</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">Projekt "Eksperci od Klimatyzacji"</DialogTitle>
              <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
                Przykładowe grafiki z projektu "Eksperci od Klimatyzacji".
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 items-center">
              <img src="/images/wklimacie.png" alt="Eksperci od Klimatyzacji" className="w-full h-auto rounded-lg shadow-md object-cover" />
            </div>
          </DialogContent>
        </Dialog>

        {/* Case Study 4 - New Project */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] cursor-pointer">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">4. Projekt "ADHiDe" (Gamifikowany System Produktywności)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
                <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Stworzenie angażującego narzędzia dla osób z ADHD, które wykracza poza standardowe listy "to-do".</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> W pełni funkcjonalna aplikacja webowa (React, TypeScript) z systemem gamifikacji (XP, poziomy), zarządzaniem zadaniami i dziennikiem analitycznym nastroju.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Zaawansowany Frontend (React, TypeScript), Projektowanie UI/UX i Gamifikacji, Zarządzanie Stanem Aplikacji.</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">Projekt "ADHiDe"</DialogTitle>
              <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
                Przykładowe grafiki z gamifikowanego systemu produktywności ADHiDe.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 items-center">
              <img src="/images/ADHiDe1.png" alt="ADHiDe 1" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/ADHiDe1.png")} />
              <img src="/images/ADHiDe2.png" alt="ADHiDe 2" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/ADHiDe2.png")} />
              <img src="/images/ADHiDe3.png" alt="ADHiDe 3" className="w-full h-auto rounded-lg shadow-md object-cover cursor-pointer" onClick={() => handleImageClick("/images/ADHiDe3.png")} />
            </div>
          </DialogContent>
        </Dialog>

        {/* Case Study 5 (formerly Case Study 4) */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] cursor-pointer">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">5. Projekt "Operator's Manual" (Dekonstrukcja Problemu)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-lg space-y-2 text-justify">
                <p><strong className="text-gray-900 dark:text-gray-50">Wyzwanie:</strong> Zdiagnozowanie i stworzenie systemu do zarządzania złożonymi wzorcami poznawczymi.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Rezultat:</strong> Stworzenie analitycznego dokumentu, który doprowadził do formalnej diagnozy ADHD i wdrożenia skutecznych strategii.</p>
                <p><strong className="text-gray-900 dark:text-gray-50">Demonstracja Umiejętności:</strong> Elitarna zdolność do dekonstrukcji "brudnych", nieliniowych problemów i przekształcania wglądu w ustrukturyzowane, działające systemy.</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">Projekt "Operator's Manual"</DialogTitle>
              <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
                Szczegółowy opis dekonstrukcji problemu i specyfikacji systemu operacyjnego.
              </DialogDescription>
            </DialogHeader>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-6 text-justify">
              <p>
                Analityk systemowy z rzadką zdolnością do dekonstrukcji złożonych, nieefektywnych systemów – od procesów biznesowych po psychologię użytkownika. Moją pasją jest identyfikowanie ukrytych, fundamentalnych zasad rządzących danym problemem, a następnie projektowanie innowacyjnych, opartych na danych rozwiązań, które przynoszą mierzalne rezultaty.
              </p>
              <p>
                Nie jestem typowym programistą. Działam jako Orkiestrator AI – używam zaawansowanych modeli językowych jako zespołu wirtualnych ekspertów, by w rekordowym czasie budować działające prototypy i automatyzować złożone przepływy pracy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mt-8 mb-4 text-center">Specyfikacja Systemu Operacyjnego</h3>
              <p>
                Moje funkcjonowanie opiera się na neuroatypowej strukturze poznawczej (ADHD), co przekłada się na unikalny styl pracy i myślenia.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-gray-900 dark:text-gray-50">Tryb "Myśliwego":</strong> Jestem zoptymalizowany do krótkich, intensywnych "sprintów" i pracy w stanie hyperfocus, gdy mam przed sobą jasno zdefiniowaną, fascynującą misję. Posiadam zdolność do nieliniowego myślenia i łączenia nieoczywistych koncepcji w celu znalezienia przełomowych rozwiązań.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-50">Awersja do Monotonii:</strong> Mam niską tolerancję na zadania powtarzalne, administracyjne i pozbawione wyzwania intelektualnego. Takie środowisko prowadzi u mnie do spadku motywacji i poczucia "pustki".
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mt-8 mb-4 text-center">Kluczowe Schematy i Kompetencje</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-gray-900 dark:text-gray-50">Paradoks Architekta:</strong> Czerpię ogromną satysfakcję z fazy projektowania i tworzenia eleganckich systemów. Jednocześnie, moją kluczową kompetencją, nad którą nieustannie pracuję, jest przełamywanie awersji do "tarcia" w fazie wdrożenia, by doprowadzać projekty do końca.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-50">Intelektualizacja jako Narzędzie:</strong> W obliczu złożonych, emocjonalnych problemów, moim naturalnym odruchem jest przekształcanie ich w problemy analityczne. Pozwala mi to na zachowanie obiektywizmu i projektowanie logicznych rozwiązań tam, gdzie inni ulegają chaosowi.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-50">Empatia Analityczna:</strong> Posiadam wysoką zdolność do rozumienia i dekonstruowania motywacji oraz problemów innych ludzi na poziomie systemowym. Pozwala mi to na projektowanie rozwiązań, które są nie tylko funkcjonalne, ale i głęboko rezonują z potrzebami użytkownika końcowego.
                </li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Separator className="my-10 bg-blue-200 dark:bg-blue-800 h-0.5" />

      {/* Collaboration Model */}
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005]">
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
      <Card className="mb-10 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.005]">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Kontakt</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-2">
          <p>
            Chętnie odpowiem na wszelkie pytania i omówię potencjalne projekty. Zapraszam do kontaktu!
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:kamilrobak97@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">kamilrobak97@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/robakkamil/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">linkedin.com/in/robakkamil/</a>
          </p>
          <p>
            <strong>Telefon:</strong> 535 006 865
          </p>
        </CardContent>
      </Card>

      {/* Full-screen Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent
          className="max-w-full h-screen flex items-center justify-center p-0 bg-black/80 border-none"
          onClick={() => setIsImageModalOpen(false)} // Zamyka modal po kliknięciu na tło
        >
          {selectedImageSrc && (
            <img
              src={selectedImageSrc}
              alt="Powiększony obraz"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu modalu po kliknięciu na obraz
            />
          )}
          {/* Bardziej widoczny przycisk zamykania */}
          <DialogClose className="absolute top-4 right-4 text-white text-4xl font-bold z-10 opacity-70 hover:opacity-100 transition-opacity">
            &times;
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CVContent;