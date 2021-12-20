FROM node:14
WORKDIR /app
COPY . /app
ARG SSH_KEY
RUN mkdir -p ~/.ssh
RUN apt-get install make gcc g++ python git openssh-client
ENV GIT_SSH_COMMAND="ssh -i ~/.ssh/file_key -o IdentitiesOnly=yes -o StrictHostKeyChecking=no" NODE_ENV=docker
RUN echo $SSH_KEY | base64 -d > ~/.ssh/file_key \
  && chmod 600 ~/.ssh/file_key \
  && ssh-keyscan bitbucket.com >> ~/.ssh/known_hosts \
  && npm install && echo 'npm modules installed successfully' \
  && rm ~/.ssh/file_key

# RUN cp node_modules/ym-utils/newrelic/index.js  newrelic.js
ENV NODE_ENV=development
EXPOSE 3000
CMD ["node", "app.js"]
