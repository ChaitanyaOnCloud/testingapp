pipeline {
    agent any

    environment {
        // ERROR 1: Missing closing quote
        NODE_ENV = 'production
    }

    tools {
        // ERROR 2: Invalid tool name casing, usually it is 'nodejs'
        nodeJS 'nodejs_18' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build & Test Backend') {
            steps {
                // ERROR 3: Wrong directory name! The actual folder is 'server', not 'backend'
                dir('backend') {
                    echo 'Installing backend dependencies...'
                    sh 'npm install'
                    
                    echo 'Running backend tests...'
                    // ERROR 4: Misspelled test script name
                    sh 'npm run tests'
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                dir('client') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm install'
                    
                    echo 'Building frontend...'
                    // ERROR 5: Wrong build command mapping
                    sh 'npm run compile-app'
                }
            }
        }

        stage('Deploy') {
            steps {
                // ERROR 6: Using single quotes prevents string interpolation in Groovy/Jenkins
                echo 'Deploying to ${NODE_ENV}'
                
                // ERROR 7: Variable definition in Declarative Pipeline `steps` requires a `script {}` block
                def deployStatus = "started"
                echo "Status: " + deployStatus
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed.'
        }
        // ERROR 8: Syntax error in Declarative Post Section - 'onSuccess' is not valid, it should just be 'success'
        onSuccess { 
            echo 'Pipeline executed successfully!'
        }
        failure {
            // ERROR 9: Typo in standard Jenkins environment variable BUILD_NUMBER
            echo "Pipeline failed. Check ${env.BUILD_NUMBR} logs." 
        }
    }
}
