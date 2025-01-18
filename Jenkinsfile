pipeline {
    agent {
        label 'Dev' // Ensures the pipeline runs on the 'Dev' agent
    }
    stages {
        stage('clone') {
                 steps {
                    sh 'sudo git clone https://github.com/KahanHM/Portfolio-.git'
                     sh "cd Portfolio"
                    sh "sudo git pull"
                }
            }
            stage('built') {
                 steps {
                    sh 'sudo docker build -t app .'
                }
            }
        stage('run') {
                 steps {
                    sh 'sudo docker run -p 3000:80 app '
                }
            }
    }  

}
