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
                cd portfolio/
                npm run build
                '''
            }
        }
    }
}
