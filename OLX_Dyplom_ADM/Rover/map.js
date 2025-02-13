const map = {"path":".","required_core":["\u003e= 1.3.0"],"required_providers":{"azapi":{"source":"azure/azapi","version_constraints":["~\u003e1.5"]},"azurerm":{"source":"hashicorp/azurerm","version_constraints":["~\u003e 3.0"]},"doppler":{"source":"DopplerHQ/doppler"},"local":{"source":"hashicorp/local","version_constraints":["~\u003e 2.0"]},"random":{"source":"hashicorp/random","version_constraints":["~\u003e3.0"]},"time":{"source":"hashicorp/time"}},"root":{"main.tf":{"type":"file","name":"main.tf","children":{"module.agent_rule_block_ssh":{"type":"module","name":"agent_rule_block_ssh","line":106,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.agent_rule_block_ssh.azurerm_network_security_rule.rule":{"type":"resource","name":"rule","line":21,"change_action":"create","resource_type":"azurerm_network_security_rule"},"module.agent_rule_block_ssh.output.rule_id":{"type":"output","name":"rule_id","line":36},"module.agent_rule_block_ssh.var.nsg_name":{"type":"variable","name":"nsg_name","line":8,"required":true},"module.agent_rule_block_ssh.var.priority":{"type":"variable","name":"priority","line":12,"required":true},"module.agent_rule_block_ssh.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true}},"source":"/main.tf"}}},"module.aks_cluster":{"type":"module","name":"aks_cluster","line":114,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.aks_cluster.azurerm_kubernetes_cluster.k8s":{"type":"resource","name":"k8s","line":43,"change_action":"create","resource_type":"azurerm_kubernetes_cluster"},"module.aks_cluster.random_pet.azurerm_kubernetes_cluster_dns_prefix":{"type":"resource","name":"azurerm_kubernetes_cluster_dns_prefix","line":38,"change_action":"create","resource_type":"random_pet"},"module.aks_cluster.random_pet.azurerm_kubernetes_cluster_name":{"type":"resource","name":"azurerm_kubernetes_cluster_name","line":33,"change_action":"create","resource_type":"random_pet"},"module.aks_cluster.var.aks_admin_username":{"type":"variable","name":"aks_admin_username","line":7,"required":true},"module.aks_cluster.var.aks_node_count":{"type":"variable","name":"aks_node_count","line":22,"required":true},"module.aks_cluster.var.aks_vm_size":{"type":"variable","name":"aks_vm_size","line":27,"required":true},"module.aks_cluster.var.resource_group_location":{"type":"variable","name":"resource_group_location","line":17,"required":true},"module.aks_cluster.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":12,"required":true},"module.aks_cluster.var.ssh_public_key_data":{"type":"variable","name":"ssh_public_key_data","line":2,"required":true}},"source":"/main.tf"},"outputs.tf":{"type":"file","name":"outputs.tf","children":{"module.aks_cluster.output.client_certificate":{"type":"output","name":"client_certificate","line":6,"sensitive":true},"module.aks_cluster.output.client_key":{"type":"output","name":"client_key","line":11,"sensitive":true},"module.aks_cluster.output.cluster_ca_certificate":{"type":"output","name":"cluster_ca_certificate","line":16,"sensitive":true},"module.aks_cluster.output.cluster_password":{"type":"output","name":"cluster_password","line":21,"sensitive":true},"module.aks_cluster.output.cluster_username":{"type":"output","name":"cluster_username","line":26,"sensitive":true},"module.aks_cluster.output.host":{"type":"output","name":"host","line":31,"sensitive":true},"module.aks_cluster.output.kube_config":{"type":"output","name":"kube_config","line":36,"sensitive":true},"module.aks_cluster.output.kubernetes_cluster_name":{"type":"output","name":"kubernetes_cluster_name","line":1}},"source":"/outputs.tf"}}},"module.aks_cluster_rg":{"type":"module","name":"aks_cluster_rg","line":26,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.aks_cluster_rg.azurerm_resource_group.this":{"type":"resource","name":"this","line":21,"change_action":"create","resource_type":"azurerm_resource_group"},"module.aks_cluster_rg.output.resource_group_id":{"type":"output","name":"resource_group_id","line":36},"module.aks_cluster_rg.output.resource_group_location":{"type":"output","name":"resource_group_location","line":32},"module.aks_cluster_rg.output.resource_group_name":{"type":"output","name":"resource_group_name","line":28},"module.aks_cluster_rg.var.location":{"type":"variable","name":"location","line":9,"required":true},"module.aks_cluster_rg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.aks_cluster_rg.var.tags":{"type":"variable","name":"tags","line":14,"required":false}},"source":"/main.tf"}}},"module.ansible_inventory":{"type":"module","name":"ansible_inventory","line":134,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.ansible_inventory.local_file.ansible_inventory":{"type":"resource","name":"ansible_inventory","line":31,"change_action":"create","resource_type":"local_file"},"module.ansible_inventory.output.inventory_path":{"type":"output","name":"inventory_path","line":43},"module.ansible_inventory.var.admin_username":{"type":"variable","name":"admin_username","line":14,"required":true},"module.ansible_inventory.var.build_agent_ips":{"type":"variable","name":"build_agent_ips","line":9,"required":true},"module.ansible_inventory.var.inventory_path":{"type":"variable","name":"inventory_path","line":19,"required":false},"module.ansible_inventory.var.main_instance_ip":{"type":"variable","name":"main_instance_ip","line":4,"required":true}},"source":"/main.tf"},"unknown file":{"type":"file","name":"unknown file","children":{"module.ansible_inventory.local.template_path":{"type":"locals","name":"template_path"},"module.ansible_inventory.local.timestamp":{"type":"locals","name":"timestamp"},"module.ansible_inventory.local.user":{"type":"locals","name":"user"}},"source":"/unknown file"}}},"module.backup_storage":{"type":"module","name":"backup_storage","line":125,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.backup_storage.azurerm_storage_account.backup_sa":{"type":"resource","name":"backup_sa","line":32,"change_action":"create","resource_type":"azurerm_storage_account"},"module.backup_storage.azurerm_storage_container.backup_container":{"type":"resource","name":"backup_container","line":49,"change_action":"create","resource_type":"azurerm_storage_container"},"module.backup_storage.output.backup_container_name":{"type":"output","name":"backup_container_name","line":66},"module.backup_storage.output.storage_account_id":{"type":"output","name":"storage_account_id","line":56},"module.backup_storage.output.storage_account_name":{"type":"output","name":"storage_account_name","line":61},"module.backup_storage.random_pet.as_storage_name":{"type":"resource","name":"as_storage_name","line":20,"change_action":"create","resource_type":"random_pet"},"module.backup_storage.var.backup_storage_prefix":{"type":"variable","name":"backup_storage_prefix","line":10,"required":true},"module.backup_storage.var.container_name":{"type":"variable","name":"container_name","line":13,"required":false},"module.backup_storage.var.location":{"type":"variable","name":"location","line":7,"required":true},"module.backup_storage.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true}},"source":"/main.tf"},"unknown file":{"type":"file","name":"unknown file","children":{"module.backup_storage.local.sanitized_storage_name":{"type":"locals","name":"sanitized_storage_name"}},"source":"/unknown file"}}},"module.backup_storage_rg":{"type":"module","name":"backup_storage_rg","line":17,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.backup_storage_rg.azurerm_resource_group.this":{"type":"resource","name":"this","line":21,"change_action":"create","resource_type":"azurerm_resource_group"},"module.backup_storage_rg.output.resource_group_id":{"type":"output","name":"resource_group_id","line":36},"module.backup_storage_rg.output.resource_group_location":{"type":"output","name":"resource_group_location","line":32},"module.backup_storage_rg.output.resource_group_name":{"type":"output","name":"resource_group_name","line":28},"module.backup_storage_rg.var.location":{"type":"variable","name":"location","line":9,"required":true},"module.backup_storage_rg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.backup_storage_rg.var.tags":{"type":"variable","name":"tags","line":14,"required":false}},"source":"/main.tf"}}},"module.build_agent_instance":{"type":"module","name":"build_agent_instance","line":85,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.build_agent_instance.azurerm_linux_virtual_machine.build_agent_vm":{"type":"resource","name":"build_agent_vm","line":98,"children":{"module.build_agent_instance.azurerm_linux_virtual_machine.build_agent_vm[0]":{"type":"resource","name":"build_agent_vm[0]","change_action":"create"},"module.build_agent_instance.azurerm_linux_virtual_machine.build_agent_vm[1]":{"type":"resource","name":"build_agent_vm[1]","change_action":"create"}},"resource_type":"azurerm_linux_virtual_machine"},"module.build_agent_instance.azurerm_network_interface.build_agent_nic":{"type":"resource","name":"build_agent_nic","line":66,"children":{"module.build_agent_instance.azurerm_network_interface.build_agent_nic[0]":{"type":"resource","name":"build_agent_nic[0]","change_action":"create"},"module.build_agent_instance.azurerm_network_interface.build_agent_nic[1]":{"type":"resource","name":"build_agent_nic[1]","change_action":"create"}},"resource_type":"azurerm_network_interface"},"module.build_agent_instance.azurerm_network_interface_security_group_association.vm_nic_nsg":{"type":"resource","name":"vm_nic_nsg","line":91,"children":{"module.build_agent_instance.azurerm_network_interface_security_group_association.vm_nic_nsg[0]":{"type":"resource","name":"vm_nic_nsg[0]","change_action":"create"},"module.build_agent_instance.azurerm_network_interface_security_group_association.vm_nic_nsg[1]":{"type":"resource","name":"vm_nic_nsg[1]","change_action":"create"}},"resource_type":"azurerm_network_interface_security_group_association"},"module.build_agent_instance.azurerm_public_ip.build_agent_pip":{"type":"resource","name":"build_agent_pip","line":81,"children":{"module.build_agent_instance.azurerm_public_ip.build_agent_pip[0]":{"type":"resource","name":"build_agent_pip[0]","change_action":"create"},"module.build_agent_instance.azurerm_public_ip.build_agent_pip[1]":{"type":"resource","name":"build_agent_pip[1]","change_action":"create"}},"resource_type":"azurerm_public_ip"},"module.build_agent_instance.azurerm_subnet.build_agent_subnet":{"type":"resource","name":"build_agent_subnet","line":57,"change_action":"create","resource_type":"azurerm_subnet"},"module.build_agent_instance.azurerm_virtual_network.build_agent_vnet":{"type":"resource","name":"build_agent_vnet","line":49,"change_action":"create","resource_type":"azurerm_virtual_network"},"module.build_agent_instance.output.private_ips":{"type":"output","name":"private_ips","line":130},"module.build_agent_instance.output.public_ips":{"type":"output","name":"public_ips","line":135},"module.build_agent_instance.output.vm_names":{"type":"output","name":"vm_names","line":140},"module.build_agent_instance.var.admin_username":{"type":"variable","name":"admin_username","line":28,"required":true},"module.build_agent_instance.var.instance_count":{"type":"variable","name":"instance_count","line":12,"required":false},"module.build_agent_instance.var.location":{"type":"variable","name":"location","line":2,"required":true},"module.build_agent_instance.var.nsg_id":{"type":"variable","name":"nsg_id","line":43,"required":true},"module.build_agent_instance.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":7,"required":true},"module.build_agent_instance.var.ssh_public_key":{"type":"variable","name":"ssh_public_key","line":33,"required":true},"module.build_agent_instance.var.vm_name":{"type":"variable","name":"vm_name","line":18,"required":true},"module.build_agent_instance.var.vm_size":{"type":"variable","name":"vm_size","line":23,"required":true},"module.build_agent_instance.var.vm_sku":{"type":"variable","name":"vm_sku","line":38,"required":true}},"source":"/main.tf"}}},"module.build_agent_rg":{"type":"module","name":"build_agent_rg","line":44,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.build_agent_rg.azurerm_resource_group.this":{"type":"resource","name":"this","line":21,"change_action":"create","resource_type":"azurerm_resource_group"},"module.build_agent_rg.output.resource_group_id":{"type":"output","name":"resource_group_id","line":36},"module.build_agent_rg.output.resource_group_location":{"type":"output","name":"resource_group_location","line":32},"module.build_agent_rg.output.resource_group_name":{"type":"output","name":"resource_group_name","line":28},"module.build_agent_rg.var.location":{"type":"variable","name":"location","line":9,"required":true},"module.build_agent_rg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.build_agent_rg.var.tags":{"type":"variable","name":"tags","line":14,"required":false}},"source":"/main.tf"}}},"module.create_builder_nsg":{"type":"module","name":"create_builder_nsg","line":62,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.create_builder_nsg.azurerm_network_security_group.nsg":{"type":"resource","name":"nsg","line":20,"change_action":"create","resource_type":"azurerm_network_security_group"},"module.create_builder_nsg.output.nsg_id":{"type":"output","name":"nsg_id","line":40},"module.create_builder_nsg.output.nsg_name":{"type":"output","name":"nsg_name","line":45},"module.create_builder_nsg.var.location":{"type":"variable","name":"location","line":8,"required":true},"module.create_builder_nsg.var.nsg_name":{"type":"variable","name":"nsg_name","line":16,"required":true},"module.create_builder_nsg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.create_builder_nsg.var.vnet_address_space":{"type":"variable","name":"vnet_address_space","line":12,"required":true}},"source":"/main.tf"}}},"module.create_main_nsg":{"type":"module","name":"create_main_nsg","line":54,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.create_main_nsg.azurerm_network_security_group.nsg":{"type":"resource","name":"nsg","line":20,"change_action":"create","resource_type":"azurerm_network_security_group"},"module.create_main_nsg.output.nsg_id":{"type":"output","name":"nsg_id","line":40},"module.create_main_nsg.output.nsg_name":{"type":"output","name":"nsg_name","line":45},"module.create_main_nsg.var.location":{"type":"variable","name":"location","line":8,"required":true},"module.create_main_nsg.var.nsg_name":{"type":"variable","name":"nsg_name","line":16,"required":true},"module.create_main_nsg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.create_main_nsg.var.vnet_address_space":{"type":"variable","name":"vnet_address_space","line":12,"required":true}},"source":"/main.tf"}}},"module.main_instance":{"type":"module","name":"main_instance","line":71,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.main_instance.azurerm_linux_virtual_machine.vm":{"type":"resource","name":"vm","line":106,"change_action":"create","resource_type":"azurerm_linux_virtual_machine"},"module.main_instance.azurerm_network_interface.vm_nic":{"type":"resource","name":"vm_nic","line":60,"change_action":"create","resource_type":"azurerm_network_interface"},"module.main_instance.azurerm_network_interface_security_group_association.vm_nic_nsg":{"type":"resource","name":"vm_nic_nsg","line":74,"change_action":"create","resource_type":"azurerm_network_interface_security_group_association"},"module.main_instance.azurerm_public_ip.vm_public_ip":{"type":"resource","name":"vm_public_ip","line":80,"change_action":"create","resource_type":"azurerm_public_ip"},"module.main_instance.azurerm_subnet.vm_subnet":{"type":"resource","name":"vm_subnet","line":47,"change_action":"create","resource_type":"azurerm_subnet"},"module.main_instance.azurerm_virtual_network.vm_vnet":{"type":"resource","name":"vm_vnet","line":39,"change_action":"create","resource_type":"azurerm_virtual_network"},"module.main_instance.data.azurerm_public_ip.vm_public_ip_data":{"type":"data","name":"vm_public_ip_data","line":95,"change_action":"read","resource_type":"azurerm_public_ip"},"module.main_instance.output.private_ip":{"type":"output","name":"private_ip","line":145},"module.main_instance.output.public_ip":{"type":"output","name":"public_ip","line":150},"module.main_instance.output.subnet_id":{"type":"output","name":"subnet_id","line":158},"module.main_instance.output.vm_name":{"type":"output","name":"vm_name","line":163},"module.main_instance.time_sleep.wait_30_seconds":{"type":"resource","name":"wait_30_seconds","line":33,"change_action":"create","resource_type":"time_sleep"},"module.main_instance.time_sleep.wait_for_ip":{"type":"resource","name":"wait_for_ip","line":89,"change_action":"create","resource_type":"time_sleep"},"module.main_instance.var.admin_username":{"type":"variable","name":"admin_username","line":16,"required":true},"module.main_instance.var.location":{"type":"variable","name":"location","line":7,"required":true},"module.main_instance.var.nsg_id":{"type":"variable","name":"nsg_id","line":28,"required":true},"module.main_instance.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.main_instance.var.ssh_public_key":{"type":"variable","name":"ssh_public_key","line":22,"required":true},"module.main_instance.var.vm_name":{"type":"variable","name":"vm_name","line":10,"required":true},"module.main_instance.var.vm_private_ip":{"type":"variable","name":"vm_private_ip","line":19,"required":true},"module.main_instance.var.vm_size":{"type":"variable","name":"vm_size","line":13,"required":true},"module.main_instance.var.vm_sku":{"type":"variable","name":"vm_sku","line":25,"required":true}},"source":"/main.tf"}}},"module.main_instance_rg":{"type":"module","name":"main_instance_rg","line":35,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.main_instance_rg.azurerm_resource_group.this":{"type":"resource","name":"this","line":21,"change_action":"create","resource_type":"azurerm_resource_group"},"module.main_instance_rg.output.resource_group_id":{"type":"output","name":"resource_group_id","line":36},"module.main_instance_rg.output.resource_group_location":{"type":"output","name":"resource_group_location","line":32},"module.main_instance_rg.output.resource_group_name":{"type":"output","name":"resource_group_name","line":28},"module.main_instance_rg.var.location":{"type":"variable","name":"location","line":9,"required":true},"module.main_instance_rg.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true},"module.main_instance_rg.var.tags":{"type":"variable","name":"tags","line":14,"required":false}},"source":"/main.tf"}}},"module.main_rule_block_ssh":{"type":"module","name":"main_rule_block_ssh","line":99,"children":{"main.tf":{"type":"file","name":"main.tf","children":{"module.main_rule_block_ssh.azurerm_network_security_rule.rule":{"type":"resource","name":"rule","line":21,"change_action":"create","resource_type":"azurerm_network_security_rule"},"module.main_rule_block_ssh.output.rule_id":{"type":"output","name":"rule_id","line":36},"module.main_rule_block_ssh.var.nsg_name":{"type":"variable","name":"nsg_name","line":8,"required":true},"module.main_rule_block_ssh.var.priority":{"type":"variable","name":"priority","line":12,"required":true},"module.main_rule_block_ssh.var.resource_group_name":{"type":"variable","name":"resource_group_name","line":4,"required":true}},"source":"/main.tf"}}}},"source":"./main.tf"},"outputs.tf":{"type":"file","name":"outputs.tf","children":{"output.ansible_inventory_path":{"type":"output","name":"ansible_inventory_path","line":3},"output.jenkins_agent_ips":{"type":"output","name":"jenkins_agent_ips","line":13},"output.jenkins_master_ip":{"type":"output","name":"jenkins_master_ip","line":8}},"source":"./outputs.tf"},"providers.tf":{"type":"file","name":"providers.tf","children":{"data.doppler_secrets.az-creds":{"type":"data","name":"az-creds","line":35,"resource_type":"doppler_secrets"}},"source":"./providers.tf"},"variables.tf":{"type":"file","name":"variables.tf","children":{"var.aks_admin_username":{"type":"variable","name":"aks_admin_username","line":86,"required":false},"var.aks_vm_size":{"type":"variable","name":"aks_vm_size","line":74,"required":false},"var.azure_subscription_id":{"type":"variable","name":"azure_subscription_id","line":11,"required":false},"var.backup_storage_prefix":{"type":"variable","name":"backup_storage_prefix","line":68,"required":false},"var.build_agent_vm_size":{"type":"variable","name":"build_agent_vm_size","line":30,"required":false},"var.doppler_token":{"type":"variable","name":"doppler_token","line":4,"required":true},"var.instance_count":{"type":"variable","name":"instance_count","line":54,"required":false},"var.main_instance_vm_size":{"type":"variable","name":"main_instance_vm_size","line":24,"required":false},"var.main_vm_name":{"type":"variable","name":"main_vm_name","line":60,"required":false},"var.node_count":{"type":"variable","name":"node_count","line":80,"required":false},"var.rg_prefix":{"type":"variable","name":"rg_prefix","line":17,"required":false},"var.vm_admin_username":{"type":"variable","name":"vm_admin_username","line":36,"required":false},"var.vm_private_ip":{"type":"variable","name":"vm_private_ip","line":42,"required":false},"var.vm_sku":{"type":"variable","name":"vm_sku","line":48,"required":false}},"source":"./variables.tf"}}}