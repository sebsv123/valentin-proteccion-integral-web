@echo off
cd C:\Users\Sebitas\valentin-web
echo Adding files...
git add -A
echo Committing...
git commit -m "perf: optimizacion rendimiento v3 - logo webp, LCP fix, GTM lazy, CSS optimizado, hero sizes"
echo Pushing...
git push origin main
echo Done!
pause
