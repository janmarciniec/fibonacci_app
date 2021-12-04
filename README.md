Aplikacja została zbudowana z wykorzystaniem biblioteki React.

Plik Dockerfile.dev1 to wersja "deweloperska" Dockerfile, uniemożliwiająca szybkie sprawdzanie zmian w kodzie. Po każdych zmianach należy od nowa zbudować obraz i uruchomić kontener.

Pliki Dockerfile.dev2 oraz docker-compose1.yml pozwalają na podłożenie wolumenów, dzięki czemu wszystkie zapisane zmiany w kodzie są automatycznie aktualizowane w trakcie działania aplikacji.

Pliki Dockerfile oraz docker-compose.yml to pliki w wersji "produkcyjnej".
