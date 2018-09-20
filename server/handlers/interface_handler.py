#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals
from __future__ import absolute_import

import json
import logging
import tornado.web

from .base_handler import BaseHandler 

logger = logging.getLogger(__name__)

class InterfaceHandler(BaseHandler):
    
    @tornado.web.asynchronous
    def get(self, args=None):
        logger.info(args)
        result = {
                'a': 'aa',
                'b': 'bb'
            }
        logger.info(result)
        self.finish(json.dumps(result))
