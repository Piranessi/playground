#!/bin/bash

set -e  # Zatrzymaj przy błędzie
USERNAME="Piranessi"

REPOS=(
  learn
  heater
  hEat
  auth_ts
  esp
  awsmqttpythonkivy
  smarthome_mobile
  spotify_organizer
  git_storage
  client
  react_hooks
  esp32_micropython_mqtt
  html_learn
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

for repo in "${REPOS[@]}"; do
  echo "=== Importing $repo ==="
  
  # Dodanie zdalnego repozytorium
  git remote add "$repo" "https://github.com/$USERNAME/$repo.git"

  # Pobranie historii
  git fetch "$repo"

  # Dodanie jako subtree do katalogu o tej samej nazwie
  git subtree add --prefix="$repo" "$repo" main || git subtree add --prefix="$repo" "$repo" master

  # (Opcjonalnie) usunięcie zdalnego
  git remote remove "$repo"

  echo ""
done

echo "✅ Wszystkie repozytoria zostały zaimportowane."
