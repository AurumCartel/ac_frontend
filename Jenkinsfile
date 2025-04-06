pipeline {
    agent any

    environment {
        IMAGE_NAME = "aurum-cartel:latest"
        CONTAINER_NAME = "aurum-cartel"
        NEXT_PUBLIC_API_BASE_URL_DEV = "https://api-ac.alainpatrick.tech"
        NEXT_PUBLIC_API_BASE_URL_PROD = "https://api-ac.alainpatrick.tech"
        PORT = "4141"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building the Docker image...'
                    sh """
                    docker build -t ${IMAGE_NAME} .
                    """
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    echo 'Checking if the container is already running...'
                    sh """
                    if [ "\$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
                        echo "Stopping and removing existing container..."
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    fi
                    """

                    echo 'Running the Docker container...'
                    sh """
                    docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} -e NEXT_PUBLIC_API_BASE_URL_DEV=${NEXT_PUBLIC_API_BASE_URL_DEV} -e NEXT_PUBLIC_API_BASE_URL_PROD=${NEXT_PUBLIC_API_BASE_URL_PROD} -e PORT=${PORT} ${IMAGE_NAME}
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }
    }
}
