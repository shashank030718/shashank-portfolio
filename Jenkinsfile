
pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
        S3_BUCKET = 's3://shashank-portfolio-site-2027'
        CLOUDFRONT_DISTRIBUTION_ID = 'E2BTT4US5PX74V'
        PATH = "/usr/local/bin:/usr/bin:/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Tools') {
            steps {
                sh '''
                    node --version
                    npm --version
                    git --version
                    aws --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    if [ -f package-lock.json ]; then
                        npm ci
                    else
                        npm install
                    fi
                '''
            }
        }

        stage('Build Portfolio') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 sync dist/ "$S3_BUCKET" --delete --region "$AWS_DEFAULT_REGION"'
            }
        }

        stage('Invalidate CloudFront') {
            steps {
                sh '''
                    aws cloudfront create-invalidation \
                        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
                        --paths "/*"
                '''
            }
        }
    }
}
