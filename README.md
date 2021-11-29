# TypeScript 4.5.2 type hints and autocomplete regression repro

[TypeScript #46735](https://github.com/microsoft/TypeScript/issues/46735) is reporoducible with `react-hook-form@7.17.1`. On `Controller` hover, type hint doesn't appear, showing "Loading..." message for two minutes.

Types were imporved in [this commit](https://github.com/react-hook-form/react-hook-form/commit/85097ae4bced7f8ffdd68256c583ca2a98c8561c), so everything works fine with `react-hook-form@7.17.2`.
