pipeline {
    agent {
        label 'Dev' // Ensures the pipeline runs on the 'Dev' agent
    }
    stages {
        stage('clone') {
            steps {
                // Use Jenkins' built-in SCM checkout
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']], // Replace 'main' with your branch name
                    userRemoteConfigs: [[url: 'https://github.com/KahanHM/Portfolio-.git']]
                ])
                // Navigate to the cloned repository folder
               
            }
        }
        stage('build') {
            steps {
                sh "cd portpolio"
                sh 'docker build -t app .'
                sh 'docker run -p 3000:80 app'
            }
        }
        
    }
}
