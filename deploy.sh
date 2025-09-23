#!/bin/bash

# tabilog-dev 버킷에 프론트엔드 배포 스크립트

echo "🚀 프론트엔드 배포를 시작합니다..."

# 1. 의존성 설치
echo "📦 의존성을 설치합니다..."
npm install

# 2. 프로덕션 빌드
echo "🔨 프로덕션 빌드를 실행합니다..."
npm run build

# 3. 빌드 결과 확인
if [ ! -d "dist" ]; then
    echo "❌ 빌드 실패: dist 폴더가 생성되지 않았습니다."
    exit 1
fi

echo "✅ 빌드가 완료되었습니다."

# 4. Google Cloud Storage 버킷에 업로드
echo "☁️ tabilog-dev 버킷에 업로드합니다..."

# 기존 파일 삭제 (선택사항)
echo "🗑️ 기존 파일을 삭제합니다..."
gsutil -m rm -r gs://tabilog-dev/*

# 새 파일 업로드
echo "📤 새 파일을 업로드합니다..."
gsutil -m cp -r dist/* gs://tabilog-dev/

# 5. 웹사이트 설정 (index.html을 기본 페이지로)
echo "🌐 웹사이트 설정을 업데이트합니다..."
gsutil web set -m index.html -e index.html gs://tabilog-dev

# 6. 캐시 설정 (선택사항)
echo "⚡ 캐시 설정을 적용합니다..."
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://tabilog-dev/**/*.js
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://tabilog-dev/**/*.css
gsutil -m setmeta -h "Cache-Control:public, max-age=86400" gs://tabilog-dev/**/*.png
gsutil -m setmeta -h "Cache-Control:public, max-age=86400" gs://tabilog-dev/**/*.jpg
gsutil -m setmeta -h "Cache-Control:public, max-age=86400" gs://tabilog-dev/**/*.jpeg
gsutil -m setmeta -h "Cache-Control:public, max-age=86400" gs://tabilog-dev/**/*.svg

echo "🎉 배포가 완료되었습니다!"
echo "🌍 웹사이트 URL: https://storage.googleapis.com/tabilog-dev/index.html"
