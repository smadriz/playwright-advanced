module.exports = {
    default: {
      require: ['tests/steps/*.steps.ts'], // Path to step definitions
      requireModule: ['ts-node/register'], // Use ts-node for TypeScript
      format: ['summary', 'progress'], // Add more formats if needed
      paths: ['features/*.feature'], // Path to feature files
      publishQuiet: true // Disables publishing results to Cucumber Studio
    }
  };