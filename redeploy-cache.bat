@echo off
cd C:\Users\Sebitas\valentin-web
echo Forzando redeploy con cambio trivial...
echo // Cache bust %RANDOM% >> redeploy-trigger.txt
git add -A
git commit -m "chore: force redeploy to clear CDN cache"
git push origin main
echo Redeploy forced! Cache se limpiara en 1-2 minutos.
pause
