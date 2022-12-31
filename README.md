# Welcome!

WavPool (pronounced "Wave Pool") as an open-source audio hosting alternative for musicians. It's like WordPress meets
Soundcloud.

# Setup

You'll need a recent version of [NodeJS](https://nodejs.org/en/) to begin. Also I've only tested development on macs.

## DEV DB

1. Ensure you've `npm install`ed
1. `cp .env.template .env`
1. Change `DATABASE_URL` to something, e.g. `file:./.devdb/database.sqlite`
1. Run `npm run devdb`

## Etc.

The Remix README below describes development. This is meant to be deployed on AWS because you need backend infra for
processing track uploads, which AWS provides.

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

The following command will run two processes during development when using Architect as your server.

- Your Architect server sandbox
- The Remix development server

```sh
$ npm run dev
```

Your file changes are watched, and assets are rebuilt upon change.

Open up [http://localhost:3333](http://localhost:3333) and you should be ready to go!

## Deploying

Before you can deploy, you'll need to do some setup with AWS:

- First [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- Then [follow the Architect setup instructions](https://arc.codes/docs/en/guides/get-started/detailed-aws-setup).

If you make it through all of that, you're ready to deploy!

1. build the app for production:

   ```sh
   npm run build
   ```

2. Deploy with `arc`

   ```sh
   arc deploy production
   ```

You're in business!
