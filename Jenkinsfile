pipeline {
    agent any

    stages {
        stage('Hello') {
          agent{
            docker{
              image 'node:18-alpine'
             reuseNode true
            }
            }
            steps {
            dir('portfolio'):
                sh'''
                ls -la
                 npm ci
                npm run build
                '''
            }
        }
    }
}
