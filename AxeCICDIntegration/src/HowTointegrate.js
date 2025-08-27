const HowToIntegrateComponent = () => {
  return (
    <main>
      <section>
        The simplest way to solve this task was to add a GitHub Actions workflow
        that automatically runs accessibility tests on every push or pull
        request. To achieve this, a YAML file (e.g., <i>axe-ci.yml</i>) was
        created in the <b>.github/workflows/</b>
        directory with the pipeline configuration. The workflow checks out the
        repository code, sets up Node.js, installs the project dependencies
        located in the AxeCICDIntegration directory, starts the application in
        the background using <b>npm start</b>, then installs Axe CLI and runs
        tests against <b>http://localhost:3000</b> with the <b>--exit</b> flag
        to ensure the pipeline fails if accessibility issues are detected. This
        way, the tests are executed automatically on the GitHub Actions server
        without the need to manually start the application before pushing the
        code.
      </section>
    </main>
  );
};

export default HowToIntegrateComponent;
