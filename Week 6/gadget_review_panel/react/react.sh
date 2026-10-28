if [ -d "/home/coder/project/workspace/gadget-panel/src/tests/" ]
    then
        rm -r /home/coder/project/workspace/gadget-panel/src/tests;
fi
cp -r /home/coder/project/workspace/react/tests /home/coder/project/workspace/gadget-panel/src/;
cd /home/coder/project/workspace/gadget-panel/;
source /usr/local/nvm/nvm.sh
nvm use 16
export CI=true;
if [ -d "/home/coder/project/workspace/gadget-panel/node_modules" ]; then
    cd /home/coder/project/workspace/gadget-panel/
    npx react-scripts test --verbose --testPathPattern=src/tests 2>&1;
else
    cd /home/coder/project/workspace/gadget-panel/
    yes | npm install
    npx react-scripts test --verbose --testPathPattern=src/tests 2>&1;
fi
