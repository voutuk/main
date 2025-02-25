# MAIN providers.tf

terraform {
  required_version = ">= 1.3.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
    azapi = {
      source  = "azure/azapi"
      version = "~>1.5"
    }
    doppler = {
      source = "DopplerHQ/doppler"
    }
    time = {
      source = "hashicorp/time"
    }
    random = {
      source  = "hashicorp/random"
      version = "~>3.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

# Remove the provider blocks from here as they are now managed by Terragrunt
data "doppler_secrets" "az-creds" {}