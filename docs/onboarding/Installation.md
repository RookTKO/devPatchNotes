#Installation Guide

Steps:

1.Clone Repo
2. Install Dependencies usin npm install
3. Install extensions





To get plantuml (any and all .iuml file extensions working) install PlantUML extension in VSCode using the following:

Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.
```
ext install plantuml
```

Once installed make sure you configure in VSCode settings for PlantUml: Java to have the correct path, ex: C:\Program Files\Java\jdk-16.0.1\bin\java.exe .

If you are not using VSCode you can follow the instructions below:

Quick Install for Windows
For windows user, majkinetor introduced a way to install plantuml and its dependencies easily. Run cmd.exe as Administrator, and run two commands as follow

```@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco install plantuml```

OR refrence the PlantUml website here:  https://plantuml.com/faq