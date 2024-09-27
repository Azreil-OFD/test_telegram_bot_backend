export default () => ({
    graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: -1,
          apolloServer: {
            tracing: false,
          },
        },
      },
    
});
