# docker-software-delivery
Demonstration of developing, testing, and delivering production software with Docker.

## Overview
The MEAN stack application code is used to demonstrate how to:
- Containerize a multi-tier application
- Create development and test environments with Docker Compose
- Create production environments using Docker Compose override files
- Release a new feature from development, through test, and into production

## Getting Started
An Azure Resource Manager template is provided to create an environment with three virtual machines in a virtual network with Docker installed on each. Certificates are shared and setup for TLS secured communication between the three Docker hosts. The created environment resembles the following:
<img src="https://user-images.githubusercontent.com/3911650/27996794-58870aa8-64a7-11e7-8227-e1f137603dba.png" alt="Azure environment">

### One-Click Deploy
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Flrakai%2Fdocker-software-delivery%2Fmaster%2Finfrastructure%2Farm-template.json">
    <img src="https://camo.githubusercontent.com/9285dd3998997a0835869065bb15e5d500475034/687474703a2f2f617a7572656465706c6f792e6e65742f6465706c6f79627574746f6e2e706e67" data-canonical-src="http://azuredeploy.net/deploybutton.png" style="max-width:100%;">
</a>

### Using PowerShell
The following command sequence can prepare the environment in the West US 2 Azure region:
```ps1
Login-AzureRmAccount
New-AzureRmResourceGroup -Name docker -Location westus2
New-AzureRmResourceGroupDeployment -ResourceGroupName docker -TemplateFile .\infrastructure\arm-template.json -Name dsd
```
When finished, the following can tear down the environment:
```ps1
Remove-AzureRmResourceGroup -Name docker
```