# 🚀 Comprehensive DevOps & Infrastructure Engineering Practicals

Welcome to the ultimate repository for DevOps, containerization, microservices, and continuous integration. Curated and implemented for **Amit**, this repository covers all foundational and advanced topics across 6 units in brief and in full detail.

---

## 📂 Comprehensive Unit Summaries

### [Unit I: Basics of DevOps Infrastructure](Unit_01_DevOps_and_Containers/README.md)
* **Origins of Containers:** Historically, applications were deployed directly onto single OS hardware or heavy Virtual Machines. Modern containers provide OS-level virtualization sharing the host kernel via Namespaces & Cgroups.
* **Linux Kernel Basics:**
  - **Namespaces:** Isolate what a process can see (network interfaces, mount points, PIDs).
  - **Control Groups (cgroups):** Restrict hardware resource usage (CPU, RAM).
* **Docker Objects:** Includes daemon (`dockerd`), CLI, images (read-only layers), containers (read-write instances), volumes (persistence), and networks.
* **Practical Commands:** `docker version`, `docker pull nginx`, `docker images`, `docker run -d`, `docker ps`.

### [Unit II: Image Building & Container Management](Unit_02_Image_Building/README.md)
* **Layering & CoW:** Images use layered read-only filesystems. Changes happen in the top container layer using the Copy-on-Write (CoW) mechanism.
* **Build Optimization:** Uses `.dockerignore` file to omit non-essential local files from the daemon build context.
* **Network Drivers:** Bridge network (default host isolated), host network (no isolation), overlay network (multi-host swarm).
* **Storage Strategies:** Volumes are fully managed by Docker. Bind Mounts map directly to host directory paths.
* **Practical:** Writing efficient Dockerfiles, tagging (`docker tag`), and pushing to Hub/GHCR.

### [Unit III: Microservices with Docker Compose](Unit_03_Docker_Compose/README.md)
* **Architecture Shift:** Migration from Monolithic applications to lightweight, independent microservices behind an API Gateway.
* **Docker Compose (YAML):** Configures services, networks, volumes, environment variables, secrets, and startup ordering dependencies.
* **Practical Stack:** Multi-container WordPress stack with an interconnected local MySQL database.
* **Commands:** `docker compose up -d`, `docker compose ps`, `docker compose down -v`.

### [Unit IV: Maven Build Automation](Unit_04_Maven_Automation/README.md)
* **Automated Builds:** Manages dependencies, simplifies compilation classpaths, resolves version conflicts using strict lifecycle phases.
* **Build Lifecycle:** `validate`, `compile`, `test`, `package`, `verify`, `install`, `deploy`.
* **Plugins Configured:** `maven-compiler-plugin`, `maven-surefire-plugin` (unit tests), `maven-shade-plugin` (Uber-JAR creation).
* **Docker Multi-Stage Build:** Optimizes container sizes by building code in a Maven image and running it inside a clean JRE.

### [Unit V: Continuous Integration (CI) with GitHub Actions](Unit_05_GitHub_Actions/README.md)
* **Workflow Directory:** `.github/workflows/ci.yml`. Contains workflows, triggers, jobs, steps, and runners.
* **Strategy & Caching:** Leverages matrix execution for multiple testing versions and caching for fast Maven dependencies resolution.
* **Automated Deployment:** Builds Docker images in GitHub-hosted runners and publishes them to registries like Docker Hub and GHCR.

### [Unit VI: CI/CD with Jenkins](Unit_06_Jenkins_CICD/README.md)
* **Master/Agent Nodes:** Master schedules jobs and handles orchestration; Agents execute commands.
* **Pipeline Structure:** Declarative pipeline syntax in a `Jenkinsfile` for code versioning. Includes stages: Checkout, Compile, Build, and Deploy.
* **Advanced Options:** Dynamic execution inside temporary Docker agents and Webhook configuration for instant trigger updates.

---

## 📚 Supplemental Resources
In addition to the practical units above, this repository includes comprehensive lecture notes and task reports:
*   📄 [Unit 2, 3, & 4 Complete Notes](./unit%202,%20unit%203,%20unit%204.pdf)
*   📄 [Unit 5 DevOps Notes](./unit%205%20Devops.pdf)
*   📁 [Unit 1 Detailed Tasks & Reports](./Devops/)

---

## 📦 Bundled Distribution
All files, configurations, and experiments have been archived into a single file for easy portability:
📥 [Download DevOps Practicals Zip (DevOps_Practicals_Amit.zip)](./DevOps_Practicals_Amit.zip)
