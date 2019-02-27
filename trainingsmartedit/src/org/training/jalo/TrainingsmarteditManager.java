/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package org.training.jalo;

import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.training.constants.TrainingsmarteditConstants;
import org.apache.log4j.Logger;

@SuppressWarnings("PMD")
public class TrainingsmarteditManager extends GeneratedTrainingsmarteditManager
{
	@SuppressWarnings("unused")
	private static Logger log = Logger.getLogger( TrainingsmarteditManager.class.getName() );
	
	public static final TrainingsmarteditManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (TrainingsmarteditManager) em.getExtension(TrainingsmarteditConstants.EXTENSIONNAME);
	}
	
}
