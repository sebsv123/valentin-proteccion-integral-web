# Foreigners Fast Citation URLs — IndexNow submission

The public IndexNow key file is `public/1b1763f6cf5cabcbfbeaf2b49f07a528.txt`.
It is intentionally public and must be deployed at the site root before a
submission. Do not put this verification key in an environment secret. The
request follows the [IndexNow protocol](https://www.indexnow.org/documentation).

After a production deployment, submit the same 14 canonical URLs frozen in the
Fast Citation measurement checkpoint with:

```sh
npm run submit:indexnow
```

For later changes, pass the affected canonical URL paths (or absolute HTTPS
URLs on `valentinproteccionintegral.com`):

```sh
npm run submit:indexnow -- /visados/seguro-medico/estudios /en/visa-health-insurance/student-visa
```

For a redirect or deletion, submit the old URL that has changed status and its
new canonical destination when one exists. A newline-delimited file is also
supported with `--file path/to/urls.txt`; lines beginning with `#` are ignored.
Use `--dry-run` to inspect the exact payload without sending it.

The script rejects other hosts, non-HTTPS absolute URLs, query strings and
fragments, and deduplicates URLs before submission. A successful endpoint
response indicates receipt/acceptance only; it does not establish that a search
engine crawled or indexed a URL. IndexNow is not a direct submission mechanism
for Google or OpenAI.
