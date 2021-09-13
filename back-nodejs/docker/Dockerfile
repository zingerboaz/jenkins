FROM node:14.15.0

RUN mkdir /project

WORKDIR /project

COPY package.json /project/package.json



RUN npm i 

# COPY . .

EXPOSE 5000

# ENTRYPOINT ["tail"]
# CMD ["-f","/dev/null"]