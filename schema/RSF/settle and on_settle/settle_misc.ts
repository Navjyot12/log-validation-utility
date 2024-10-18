const settleSchema = {
    type: 'object',
    required: ['context', 'message'],
    properties: {
        context: {
            type: 'object',
            required: [
                'domain',
                'location',
                'version',
                'action',
                'bap_id',
                'bap_uri',
                'bpp_id',
                'bpp_uri',
                'transaction_id',
                'message_id',
                'timestamp',
                'ttl'
            ],
            properties: {
                domain: {
                    type: 'string',
                    enum: ['ONDC:NTS10'],
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
                                    enum: ['IND'],
                                },
                            },
                        },
                        city: {
                            type: 'object',
                            required: ['code'],
                            properties: {
                                code: {
                                    type: 'string',
                                    enum: ['*'], // Wildcard for all cities
                                },
                            },
                        },
                    },
                },
                version: {
                    type: 'string',
                    enum: ['2.0.0'],
                },
                action: {
                    type: 'string',
                    enum: ['settle'],
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
                            minItems: 1,
                            items: {
                                type: 'object',
                                required: ['self'],
                                properties: {
                                    self: {
                                        type: 'object',
                                        required: ['amount'],
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
                                                        type: 'string', // Can be changed to 'number' depending on actual value type
                                                        pattern: '^[0-9]+(\.[0-9]{1,2})?$', // Pattern to allow up to 2 decimal places
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
        },
    },
};

export default settleSchema;
