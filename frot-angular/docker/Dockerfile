FROM node:14.15.0

RUN mkdir /project

WORKDIR /project

COPY package.json /project/package.json

RUN npm i -g @angular/cli

RUN npm i 

# COPY . .

EXPOSE 4200


#  ENTRYPOINT ["tail"]
#  CMD ["-f","/dev/null"]