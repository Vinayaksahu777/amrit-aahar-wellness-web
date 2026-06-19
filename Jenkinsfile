pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning Repo'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t amrit-aahar .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop amrit-aahar || true
                docker rm amrit-aahar || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name amrit-aahar \
                -p 3000:3000 \
                amrit-aahar
                '''
            }
        }
    }
}