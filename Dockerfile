FROM bboron86/alt-base-image:0.2
LABEL maintainer="Bartosz Boron, https://github.com/bboron86"

WORKDIR /alt-runner-app

COPY package*.json ./

RUN npm install

COPY . .

# start script that can be executed by calling '$ runScenario xyz'
RUN echo '#!/bin/bash\nnode /alt-runner-app/index.js "$@"' > /usr/bin/runScenario && chmod +x /usr/bin/runScenario

CMD ["npm", "start"]