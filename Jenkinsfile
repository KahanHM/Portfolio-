pipeline {
    agent any

    stages {
        stage('Hello') {
          agent{
            docker{
              image 'node:16-alpine'
             reuseNode true
            }
            }
            steps {
                sh'''
                ls -la
                npm install
                npm run build
                '''
            }
        }
    }
}
