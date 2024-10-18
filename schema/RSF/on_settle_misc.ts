const onSettleSchema = {
    type: 'object',
    required: ['context', 'message'],
    properties: {
        context: {
            type: 'object',
            required: [
                'domain',
                'action',
                'version',
                'bap_id',
                'bap_uri',
                'bpp_id',
                'bpp_uri',
                'transaction_id',
                'message_id',
                'timestamp',
                'ttl',
                'location'
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
                version: {
                    type: 'string',
                    enum: ['2.0.0'],
                },
                bap_id: {
                    type: 'string',
                },
                bap_uri: {
                    type: 'string',
                    format: 'uri',
                },
                bpp_id: {
                    type: 'string',
                },
                bpp_uri: {
                    type: 'string',
                    format: 'uri',
                },
                transaction_id: {
                    type: 'string',
                },
                message_id: {
                    type: 'string',
                },
                timestamp: {
                    type: 'string',
                    format: 'date-time',
                },
                ttl: {
                    type: 'string',
                },
                location: {
                    type: 'object',
                    required: ['country', 'city'],
                    properties: {
                        country: {
                            type: 'object',
                            required: ['code'],
                            properties: {
                                code: {
                                    type: 'string',
                                },
                            },
                        },
                        city: {
                            type: 'object',
                            required: ['code'],
                            properties: {
                                code: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
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
                                required: ['self'],
                                properties: {
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
                                                    },
                                                },
                                            },
                                            status: {
                                                type: 'string',
                                                enum: ['SETTLED'],
                                            },
                                            reference_no: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    additionalProperties: false,
};

export default onSettleSchema;
