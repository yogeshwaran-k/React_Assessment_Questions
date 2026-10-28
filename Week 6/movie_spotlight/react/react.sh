if [ -d "/home/coder/project/workspace/movie-panel/src/tests/" ]
    then
        rm -r /home/coder/project/workspace/movie-panel/src/tests;
fi
cp -r /home/coder/project/workspace/react/tests /home/coder/project/workspace/movie-panel/src/;
cd /home/coder/project/workspace/movie-panel/;
source /usr/local/nvm/nvm.sh
nvm use 16
export CI=true;
if [ -d "/home/coder/project/workspace/movie-panel/node_modules" ]; then
    cd /home/coder/project/workspace/movie-panel/
    npx react-scripts test --verbose --testPathPattern=src/tests 2>&1;
else
    cd /home/coder/project/workspace/movie-panel/
    yes | npm install
    npx react-scripts test --verbose --testPathPattern=src/tests 2>&1;
fi
