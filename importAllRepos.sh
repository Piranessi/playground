#!/bin/bash

set -e
USERNAME="Piranessi"
SCRIPT_NAME="$(basename "$0")"

REPOS=(
  learn
  heater
  hEat
  esp
  awsmqttpythonkivy
  smarthome_mobile
  spotify_organizer
  react_hooks
  esp32_micropython_mqtt
  SDiZO-lab1-2017
  Notepad
  L10
  CheckersQt
  L9
  L8
  GUICalcQtWidgets
  PathExist
  L6
  TicTacToe
)

if ! git rev-parse HEAD >/dev/null 2>&1; then
  echo "❌ Repozytorium nie ma jeszcze commita. Dodaj pierwszy commit:"
  echo "   touch .gitkeep && git add .gitkeep && git commit -m 'Initial commit'"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ Masz niezapisane zmiany. Zacommituj lub wyczyść repo:"
  echo "   git add . && git commit -m 'Save before import'"
  echo "   lub git reset --hard"
  exit 1
fi

for repo in "${REPOS[@]}"; do
  echo "=== Importing $repo ==="

  # Usuń katalog jeśli istnieje, ale nie usuwaj skryptu
  if [ -d "$repo" ]; then
    echo "🧹 Usuwam katalog $repo"
    rm -rf "$repo"
    git add -A
    git commit -m "Remove existing $repo before re-import"
  fi

  git remote remove "$repo" 2>/dev/null || true
  git remote add "$repo" "https://github.com/$USERNAME/$repo.git"
  git fetch "$repo"

  if git ls-remote --exit-code --heads "$repo" main >/dev/null 2>&1; then
    BRANCH="main"
  elif git ls-remote --exit-code --heads "$repo" master >/dev/null 2>&1; then
    BRANCH="master"
  else
    echo "⚠️  Nie znaleziono gałęzi main ani master w $repo, pomijam..."
    git remote remove "$repo"
    continue
  fi

  git subtree add --prefix="$repo" "$repo" "$BRANCH"
  git remote remove "$repo"
  echo ""
done

echo "✅ Wszystkie repozytoria zaimportowane z nadpisaniem istniejących katalogów."
