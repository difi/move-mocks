package com.example.dpimock;

import no.difi.oxalis.api.lang.OxalisException;

public class OxalisAs4Exception extends OxalisException {

    public OxalisAs4Exception(String message) {
        super(message);
    }

    public OxalisAs4Exception(String message, Throwable cause) {
        super(message, cause);
    }

}
