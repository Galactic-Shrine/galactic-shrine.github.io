---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: cpp
title: Installation C++
navTitle: Installation
order: 10
permalink: /docs/gsid/cpp/index.html
summary: Compiler, tester et installer GalacticShrine.GsId.Cpp avec CMake.
---

## Prérequis

L’implémentation native utilise **C++20** et CMake.

## Compiler la bibliothèque

```bash
cmake -S . -B build \
  -DCMAKE_BUILD_TYPE=Release \
  -DGSID_BUILD_TESTS=ON \
  -DGSID_BUILD_EXAMPLES=ON

cmake --build build
ctest --test-dir build --output-on-failure
```

## Visual Studio

```powershell
cmake -S . -B build -G "Visual Studio 17 2022"
cmake --build build --config Release
ctest --test-dir build -C Release --output-on-failure
```

## Installer avec CMake

```bash
cmake --install build --prefix ./install
```

Dans un projet consommateur :

```cmake
find_package(GalacticShrineGsId CONFIG REQUIRED)
target_link_libraries(mon_application PRIVATE GalacticShrine::GsId)
```
