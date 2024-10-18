const reportSchema = {
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
                    enum: ['report'],
                },
                country: {
                    type: 'string',
                    enum: ['IND'],
                },
                core_version: {
                    type: 'string',
                    enum: ['2.0.0'],
                },
                bap_id: {
                    type: 'string',
                    enum: ['collectorapp.com'], // Example for idCheck
                },
                bap_uri: {
                    type: 'string',
                    format: 'uri',
                },
                bpp_id: {
                    type: 'string',
                    enum: ['sa_nocs.nbbl.com'], // Example for idCheck
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
                city: {
                    type: 'string',
                    enum: ['*'],
                },
            },
        },
        message: {
            type: 'object',
            required: ['ref_transaction_id', 'ref_message_id'],
            properties: {
                ref_transaction_id: {
                    type: 'string',
                },
                ref_message_id: {
                    type: 'string',
                },
            },
        },
    },
};

export default reportSchema;
