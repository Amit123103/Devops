# 📘 DevOps Principles & Concepts Manual

## Unit 1: Foundations of Containment
Hypervisors emulate a whole operating system, requiring complete hardware virtualization layers. Containers execute as normal host processes, isolated natively using **Namespaces** (visual scope) and **Control Groups** (resource metering).

## Unit 2: Storage Persistence
By default, container filesystems are ephemeral. Persisting important data relies on mounting designated external disks or host file paths:
- **Volumes:** Managed internally within designated directories by Docker.
- **Bind Mounts:** Maps strict, direct host folders directly inside the container instance.

## Unit 3: Multi-Tier Microservice Patterns
Splitting single application structures into standalone microservices improves scalability, decouples services, and reduces operational failures.

## Unit 4: Maven Life Cycles
Provides distinct target coordinates for handling software lifecycle automation:
- `validate`
- `compile`
- `test`
- `package`
- `install`
- `deploy`

## Unit 5: GitHub Actions Pipelines
Workflow automation files stored directly in repositories. Automate test cases, matrix strategies, and artifact packaging.

## Unit 6: Jenkins CI/CD
Provides robust Master/Agent topologies to run parallel automation steps in isolated target worker nodes.
