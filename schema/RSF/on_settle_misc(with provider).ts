const onSettleSchema = {
    type: 'object',
    required: ['context', 'message'],
    properties: {
        context: {
            type: 'object',
            required: [
                'domain',
                'action',
                'country',
                'core_version',
                'bap_id',
                'bap_uri',
                'bpp_id',
                'bpp_uri',
                'transaction_id',
                'message_id',
                'timestamp',
                'ttl',
                'city',
            ],
            properties: {
                domain: {
                    type: 'string',
                    enum: ['ONDC:NTS10'],
                },
                action: {
                    type: 'string',
                    enum: ['on_settle'],
                },
                country: {
                    type: 'string',
                    enum: ['IND'],
                },
                core_version: {
                    type: 'string',
                    enum: ['2.0.0'],
                },
                bap_id: { type: 'string', enum: ['collectorapp.com'] },
                bap_uri: { type: 'string', format: 'uri' },
                bpp_id: { type: 'string', enum: ['sa_nocs.nbbl.com'] },
                bpp_uri: { type: 'string', format: 'uri' },
                transaction_id: { type: 'string' },
                message_id: { type: 'string' },
                timestamp: { type: 'string', format: 'date-time' },
                ttl: { type: 'string' },
                city: { type: 'string', enum: ['*'] },
            },
        },
        message: {
            type: 'object',
            required: ['settlement'],
            properties: {
                settlement: {
                    type: 'object',
                    required: ['type', 'id', 'orders'],
                    properties: {
                        type: {
                            type: 'string',
                            enum: ['MISC'],
                        },
                        id: {
                            type: 'string',
                        },
                        orders: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: ['provider', 'self'],
                                properties: {
                                    provider: {
                                        type: 'object',
                                        required: ['id', 'amount', 'status', 'reference_no', 'error'],
                                        properties: {
                                            id: { type: 'string' },
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: {
                                                        type: 'string',
                                                        enum: ['INR'],
                                                    },
                                                    value: {
                                                        type: 'string',
                                                        pattern: '^[0-9]+(\\.[0-9]{1,2})?$',
                                                    },
                                                },
                                            },
                                            status: {
                                                type: 'string',
                                                enum: ['NOT-SETTLED'],
                                            },
                                            reference_no: { type: 'string' },
                                            error: {
                                                type: 'object',
                                                required: ['code', 'message'],
                                                properties: {
                                                    code: { type: 'string' },
                                                    message: { type: 'string' },
                                                },
                                            },
                                        },
                                    },
                                    self: {
                                        type: 'object',
                                        required: ['amount', 'status', 'reference_no'],
                                        properties: {
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: {
                                                        type: 'string',
                                                        enum: ['INR'],
                                                    },
                                                    value: {
                                                        type: 'string',
                                                        pattern: '^[0-9]+(\\.[0-9]{1,2})?$',
                                                    },
                                                },
                                            },
                                            status: {
                                                type: 'string',
                                                enum: ['SETTLED'],
                                            },
                                            reference_no: { type: 'string' },
                                        },
                                    },
                                },
                                additionalProperties: false,
                            },
                            minItems: 1,
                        },
                    },
                    additionalProperties: false,
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};

export default onSettleSchema;
