pipeline {
    agent {
        label 'Dev' // Ensures the pipeline runs on the 'Dev' agent
    }
    stages {
        stage('clone') {
                 steps {
                    sh 'git clone'
                    sh "git pull"
                }
            }
            stage('built') {
                 steps {
                    sh 'docker build -t app .'
                }
            }
        stage('clone') {
                 steps {
                    sh 'docker run -p 3000:80 app "
                }
            }
    }  

}
