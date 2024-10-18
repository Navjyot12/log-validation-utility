const onSettleSchema = {
    type: 'object',
    required: ['context', 'message'],
    properties: {
        context: {
            type: 'object',
            required: [
                'domain',
                'action',
                'location',
                'version',
                'bap_id',
                'bap_uri',
                'bpp_id',
                'bpp_uri',
                'transaction_id',
                'message_id',
                'timestamp',
                'ttl',
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
                location: {
                    type: 'object',
                    required: ['country', 'city'],
                    properties: {
                        country: {
                            type: 'object',
                            required: ['code'],
                            properties: {
                                code: { type: 'string', enum: ['IND'] },
                            },
                        },
                        city: {
                            type: 'object',
                            required: ['code'],
                            properties: {
                                code: { type: 'string', enum: ['*'] },
                            },
                        },
                    },
                },
                version: {
                    type: 'string',
                    enum: ['2.0.0'],
                },
                bap_id: { type: 'string' },
                bap_uri: { type: 'string', format: 'uri' },
                bpp_id: { type: 'string' },
                bpp_uri: { type: 'string', format: 'uri' },
                transaction_id: { type: 'string' },
                message_id: { type: 'string' },
                timestamp: { type: 'string', format: 'date-time' },
                ttl: { type: 'string' },
            },
        },
        message: {
            type: 'object',
            required: ['collector_app_id', 'receiver_app_id', 'settlement'],
            properties: {
                collector_app_id: { type: 'string' },
                receiver_app_id: { type: 'string' },
                settlement: {
                    type: 'object',
                    required: ['type', 'id', 'orders'],
                    properties: {
                        type: { type: 'string', enum: ['NP-NP'] },
                        id: { type: 'string' },
                        orders: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: ['id', 'inter_participant', 'collector', 'self'],
                                properties: {
                                    id: { type: 'string' },
                                    inter_participant: {
                                        type: 'object',
                                        required: ['settled_amount', 'amount', 'status', 'reference_no'],
                                        properties: {
                                            settled_amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: { type: 'string', enum: ['INR'] },
                                                    value: { type: 'string' },
                                                },
                                            },
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: { type: 'string', enum: ['INR'] },
                                                    value: { type: 'string' },
                                                },
                                            },
                                            status: { type: 'string', enum: ['SETTLED'] },
                                            reference_no: { type: 'string' },
                                        },
                                    },
                                    collector: {
                                        type: 'object',
                                        required: ['amount'],
                                        properties: {
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: { type: 'string', enum: ['INR'] },
                                                    value: { type: 'string' },
                                                },
                                            },
                                        },
                                    },
                                    provider: {
                                        type: 'object',
                                        required: ['id', 'amount', 'status', 'reference_no', 'error'],
                                        properties: {
                                            id: { type: 'string' },
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: { type: 'string', enum: ['INR'] },
                                                    value: { type: 'string' },
                                                },
                                            },
                                            status: { type: 'string', enum: ['SETTLED', 'NOT-SETTLED'] },
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
                                        required: ['amount', 'status', 'reference_no', 'error'],
                                        properties: {
                                            amount: {
                                                type: 'object',
                                                required: ['currency', 'value'],
                                                properties: {
                                                    currency: { type: 'string', enum: ['INR'] },
                                                    value: { type: 'string' },
                                                },
                                            },
                                            status: { type: 'string', enum: ['SETTLED', 'NOT-SETTLED'] },
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
                                },
                                additionalProperties: false,
                            },
                        },
                    },
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};

export default onSettleSchema;
