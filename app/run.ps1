# Set service name for project
# $DEFAULT_PNAME = "mephisto"
# $env:PROJECT_NAME = Read-Host "Write your project name or Enter to by default '$DEFAULT_PNAME'"
# if ([string]::IsNullOrEmpty($env:PROJECT_NAME) -or [string]::IsNullOrWhiteSpace($env:PROJECT_NAME)) {
#     $env:PROJECT_NAME = $DEFAULT_PNAME
# }
$env:PROJECT_NAME = (get-item .).Parent.BaseName
Write-Host "Your project name is '$env:PROJECT_NAME'"
Write-Host

#convert file CRLF to LF
# (Get-Content -Raw -Path $link_task) -replace '\n', '\r\n' | Set-Content -Path $link_task
$link_task = [IO.Path]::GetFullPath("app\webapp\link_mephisto_task.sh")
# $file_content = Get-Content $link_task -Raw
# if ($file_content.Contains("`r`n")) {
#     Write-Host "Convert CRLF to LF"
#     $file_content.Replace("`r`n", "`n") | Set-Content $link_task
# }
$content = [IO.File]::ReadAllText($link_task)
if ($content.contains("`r`n")) {
    Copy-Item $link_task ($link_task.fullname + (Get-Date -Format "~yyyyMMddHHmm~"))
    $newContent = ($content -replace "`r`n", "`n")
    [IO.File]::WriteAllText($link_task, $newContent)
    Write-Host "Convert CRLF to LF"
}

#create menu to select
function Show-Menu {
    param (
        [string]$Title = 'Install and run Mephisto'
    )
    # Clear-Host
    Write-Host "================ $Title ================"
    
    Write-Host "1: Press '1' for build Mephisto."
    Write-Host "2: Press '2' for run Mephisto."
    Write-Host "3: Press '3' for watch change and show up Mephisto."
    Write-Host "4: Press '4' for link your task into Mephisto" 
    Write-Host "Q: Press 'Q' to quit."
}

# run cmd base on selection
do {
    Show-Menu    
    $selection = Read-Host "Please make a selection"
    $selection = $selection.ToLower()
    switch ($selection) {
        '1' {
            # Clear old cache
            $node_modules_path = ".\webapp\node_modules"
            if (Test-Path $node_modules_path) {
                Remove-Item -LiteralPath $node_modules_path -Force -Recurse
            }
            
            Invoke-Expression "docker-compose build --no-cache"
        } '2' {
            Invoke-Expression "docker-compose up"
        } '3' {
            Invoke-Expression "docker exec -it $env:PROJECT_NAME-service sh -c 'cd webapp && npm run dev:watch'"
        } '4' {
            Invoke-Expression "docker exec -it $env:PROJECT_NAME-service sh -c 'cd webapp && ./link_mephisto_task.sh'"
        }
    }
    # pause
}
until ($selection -eq 'q')
