export default function logModuleNamePlugin() {
  return {
    name: 'log-module-name',
    load(id) {
      // Loguje nazwę modułu (ścieżkę)
      console.log(`Przetwarzam moduł: ${id}`);
      return null;
    }
  };
}
