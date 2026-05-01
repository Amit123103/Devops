const simulations = {
    'u1': 'amit@devops:~$ docker pull nginx:alpine\nStatus: Downloaded newer image for nginx:alpine\namit@devops:~$ docker run -d --name web_server -p 80:80 nginx:alpine\nf9e18b0c223a851d0db1262ab091176b1\namit@devops:~$ docker ps\nCONTAINER ID   IMAGE          COMMAND       STATUS       PORTS\nf9e18b0c223a   nginx:alpine   "nginx -g…"   Up 2 sec     0.0.0.0:80->80/tcp',
    
    'u2': 'amit@devops:~$ docker build -t my-custom-app:v1 .\n[+] Building 4.2s (8/8) FINISHED\n => [internal] load build definition from Dockerfile\n => [internal] load metadata for node:20-alpine\n => [1/4] FROM node:20-alpine\n => [2/4] COPY package*.json ./\n => [3/4] RUN npm ci\n => [4/4] COPY . .\n => exporting to image\n => => writing image sha256:d8c9f0e132',
    
    'u3': 'amit@devops:~$ docker compose up -d\n[+] Running 4/4\n ⠿ Network internal_network  Created\n ⠿ Volume db_data            Created\n ⠿ Container mysql_db        Started\n ⠿ Container wordpress_app   Started',
    
    'u4': 'amit@devops:~$ mvn clean package\n[INFO] Scanning for projects...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 3.421 s\n[INFO] Finished at: 2026-05-01T21:40:00Z\n[INFO] ------------------------------------------------------------------------',
    
    'u5': 'amit@devops:~$ git push origin main\nEnumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nWriting objects: 100% (3/3), 320 bytes\nTo https://github.com/Amit123103/Devops.git\n   c17c100..ad06733  main -> main\n[INFO] GitHub Actions Runner: Running tests for Amit...',
    
    'u6': 'amit@devops:~$ jenkins-cli build my-pipeline\nStarted by remote user Amit\nRunning in Jenkins Agent Node #3\n[Pipeline] stage (Checkout)\n[Pipeline] sh "git fetch --all"\n[Pipeline] stage (Build)\n[Pipeline] sh "mvn clean test"\n[Pipeline] Finished: SUCCESS',

    'setup': 'amit@devops:~$ git --version\ngit version 2.40.1\namit@devops:~$ docker version\nDocker version 24.0.2, build cb74f4c\namit@devops:~$ mvn --version\nApache Maven 3.9.2\namit@devops:~$ java -version\nopenjdk version "17.0.7"'
};

function switchTab(unitId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const link = document.querySelector(`a[href="#${unitId}"]`);
    if (link) {
        link.parentElement.classList.add('active');
    }

    const sections = document.querySelectorAll('.unit-section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === unitId) {
            section.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSim(termId, simKey) {
    const termContainer = document.getElementById(termId);
    const textElement = document.getElementById(termId + '-txt');
    const fullText = simulations[simKey] || '';
    
    termContainer.classList.add('active');
    textElement.textContent = "";

    let index = 0;
    function typeNextChar() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeNextChar, 10);
        }
    }
    typeNextChar();
}
